"use client";

import { useState, useReducer } from "react";
import { useDropzone } from "react-dropzone";
// import { supabase } from '../utils/supabaseClient';
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { useUser } from "@/lib/stores/user";

const imageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      return [
        ...state,
        { file: action.payload, preview: URL.createObjectURL(action.payload) },
      ];
    case "REMOVE_IMAGE":
      return state.filter((_, index) => index !== action.payload);
    case "TOGGLE_VISIBILITY":
      return state.map((image, index) =>
        index === action.payload
          ? { ...image, isPublic: !image.isPublic }
          : image
      );
    case "RESET":
      return [];
    default:
      return state;
  }
};

const ImageUpload = () => {
  const supabase = createClient();
  const { user } = useUser();
  const user_id = supabase.auth.getUser();
  const [images, dispatch] = useReducer(imageReducer, []);
  const [uploadProgress, setUploadProgress] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      if (file.size > 5 * 1024 * 1024) {
        setError("La taille du fichier doit être inférieure à 5 Mo");
        return;
      }
      if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
        setError("Seuls les formats PNG, JPG, et JPEG sont acceptés");
        return;
      }
      dispatch({ type: "ADD_IMAGE", payload: file });
      setError("");
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png, image/jpg",
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
  });

  const handleUpload = async () => {
    const newUploadProgress = Array(images.length).fill(0);
    setUploadProgress(newUploadProgress);

    images.forEach(async (image, index) => {
      const file = new File(
        [image.file],
        `image_picturamar_${Date.now()}.${image.file.name.split('.').pop()}`,
        {
          type: image.file.type,
        }
      );

      console.log(images);
      

      const { data: imageData, error } = await supabase.storage
        .from("images_priver")
        .upload(`${user?.pseudo}/${file.name}`, file, {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            newUploadProgress[index] = progress;
            setUploadProgress([...newUploadProgress]);
          },
        });

      if (error) {
        setError("Erreur lors du téléchargement de l'image");
      } else {
        // const imageUrl = `${
        //   supabase.storage.from("images").getPublicUrl(`public/${file.name}`)
        //     .publicURL
        // }`;

        const imageUrl = supabase.storage
          .from("images_priver")
          .getPublicUrl(imageData.path).data.publicUrl;

        const { data, error } = await supabase.from("images").insert([
          {
            priver: image.isPublic ? true : false,
            nom: file.name,
            image_url: imageUrl,
            user_id: (await user_id).data.user.id,
          },
        ]);

        if (error) {
          setError(
            "Erreur lors de l'enregistrement de l'image dans la base de données"
          );
        } else {
          alert("Image téléchargée et enregistrée avec succès !");
          dispatch({ type: "REMOVE_IMAGE", payload: index });
          setUploadProgress(newUploadProgress.filter((_, i) => i !== index));
        }
      }
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-6 rounded-md cursor-pointer w-full ${
          isDragging ? "border-blue-500 bg-blue-100" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-xs text-center">
          Glisser-déposer une ou plusieurs images; cliquer pour sélectionner
        </p>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex justify-center p-2 bg-slate-200 border-2 border-cyan-500 rounded-lg h-[400px]"
          >
            <Image
              src={image.preview}
              alt="Preview"
              width={200}
              height={200}
              className="h-[384px] w-auto object-contain"
            />
            <button
              onClick={() => dispatch({ type: "REMOVE_IMAGE", payload: index })}
              className="absolute top-2 right-2 bg-red-500 bg-opacity-75 text-white rounded-full w-10 h-10 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute top-2 left-2 bg-cyan-500 text-white rounded-full py-1 px-4">
              <input
                type="checkbox"
                checked={image.isPublic}
                defaultValue={false}
                onChange={() => {
                  dispatch({ type: "TOGGLE_VISIBILITY", payload: index });
                }}
              />
              <span className="ml-2 text-xs">
                {image.isPublic ? "Public" : "Privé"}
              </span>
            </div>
            {/* {uploadProgress[index] > 0 && (
              <div className="mx-auto w-[calc(100%_-_10px)] bg-slate-300 z-10 absolute bottom-2 rounded-full h-2 mt-2">
                <div
                  className="bg-cyan-500 h-2 rounded-full"
                  style={{ width: `${uploadProgress[index]}%` }}
                ></div>
              </div>
            )} */}
          </div>
        ))}
      </div>
      {images.length > 0 && (
        <div className="mt-4 w-full flex space-x-4">
          <button
            onClick={handleUpload}
            className="bg-cyan-500 text-white px-4 py-2 rounded-md"
          >
            Téléverser
          </button>
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Annuler tout
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
