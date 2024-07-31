import { getCroppedImg } from "@/lib/cropImage";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Cropper from "react-easy-crop";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import Image from "next/image";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/client";
import { useUser } from "@/lib/stores/user";

const ImageUploaderProfil = () => {
  const supabase = createClient();
  const { updateUser, user } = useUser();
  const [image, setImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file.size > 1048576) {
      // 1 Mo en octets
      setErrorMessage("La taille de l'image ne doit pas dépasser 1 Mo");
      return;
    }
    if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
      setErrorMessage(
        "Le type de fichier n'est pas accepté. Seuls les fichiers PNG, JPEG et JPG sont autorisés."
      );
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      console.log(reader);
      setOpen(true);
      setErrorMessage("");
    };
    reader.readAsDataURL(file);
  }, []);

  const onDropRejected = useCallback((rejectedFiles) => {
    setErrorMessage(
      "Le type de fichier n'est pas accepté. Seuls les fichiers PNG, JPEG et JPG sont autorisés."
    );
    console.log(rejectedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDropRejected,
    accept: "image/png, image/jpeg, image/jpg",
  });

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  // sauvegarder l'image rogner
  const handleSave = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedArea);
      setImage(croppedImage);
      setOpen(false);
      // Upload the cropped image
      // uploadImage(croppedImage);
    } catch (e) {
      setOpen(false);
      toast("Le type de l'image");
      console.error(e);
    }
  }, [image, croppedArea]);

  // uploader l'image vers supabase
  const uploadImage = async () => {
    try {
      setUploading(true);
      const file = await fetch(image).then((r) => r.blob());
      // const fileName = `avatar_picturamara.jpeg`;
      const fileName = `avatar_picturamar_${Date.now()}.jpeg`;

      const { data, error: uploadError } = await supabase.storage
        .from("photo_profil") // Remplacez par le nom de votre bucket
        .upload(`${user?.pseudo}/${fileName}`, file, {
          cacheControl: "3600",
          upsert: true,
        });

      if (uploadError) {
        throw uploadError;
      }

      const newPhotoUrl = supabase.storage
        .from("photo_profil")
        .getPublicUrl(data.path).data.publicUrl;

      const oldImageUrl = user?.photo_url;
      if (oldImageUrl) {
        const oldImageName = oldImageUrl.split("/").pop();
        console.log(oldImageName);
        const { error: deleteError } = await supabase.storage
          .from("photo_profil")
          .remove([`${user?.pseudo}/${oldImageName}`]);

        if (deleteError) {
          console.error("Error deleting old image:", deleteError.message);
        }
      }

      updateUser({ photo_url: newPhotoUrl });

      // Update the URL in the database
      const { error: dbError } = await supabase
        .from("users")
        .update({ photo_url: newPhotoUrl })
        .eq("id", user?.id);

      if (dbError) {
        throw dbError;
      }
      setImage(null)
      setErrorMessage("");
      alert("Image uploadée avec succès !");
    } catch (error) {
      console.error("Error uploading image:", error.message);
      setErrorMessage("Erreur lors de l'upload de l'image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 p-4 rounded cursor-pointer"
      >
        <input {...getInputProps()} />
        <p className="text-xs font-bold text-gray-600">
          Glissez-déposez une image ici, ou cliquez pour en sélectionner une
        </p>
      </div>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

      {image ? (
        <div className="relative flex justify-center mt-4 max-w-[260px] w-[260px] h-[260px]">
          <Image
            priority={true}
            src={image}
            alt="Rogner"
            width={260}
            height={260}
            className={`min-w-[260px] w-[260px] h-[260px] object-cover rounded-full`}
          />
          <Button
            onClick={uploadImage}
            className="absolute bottom-0 px-6 bg-cyan-500 hover:bg-cyan-800"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </Button>
        </div>
      ) : (
        <div className="mt-4 max-w-[260px] w-[260px] h-[260px]">
          {user?.photo_url ? (
            <Image
              priority={true}
              src={user?.photo_url}
              alt="photo de profil"
              width={260}
              height={260}
              className={`min-w-[260px] w-[260px] h-[260px] object-cover rounded-full`}
            />
          ) : (
            <Image
              priority={true}
              src={"/images/default-avatar.png"}
              alt="default avatar"
              width={260}
              height={260}
              className={`min-w-[260px] w-[260px] h-[260px] object-cover rounded-full`}
            />
          )}
        </div>
      )}
      {/* <Modal open={open} onClose={() => setOpen(false)}>
        <div className="relative w-full h-64"> */}
      {/* <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        cropShape="round"
      /> */}
      {/* </div>
        <div className="flex justify-end mt-4">
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} className="ml-2">
            Save
          </Button>
        </div>
      </Modal> */}

      <AlertDialog
        open={open}
        onOpenChange={setOpen}
        onClose={() => setOpen(false)}
      >
        <AlertDialogTrigger>
          {/* Trigger can be a hidden button if not directly visible */}
        </AlertDialogTrigger>
        <AlertDialogContent className="flex items-center justify-center px-2 bg-white rounded-lg">
          <div className="relative bg-white rounded-lg w-full max-w-md">
            <AlertDialogTitle className="mb-2 text-gray-600">
              Recadrer l'image
            </AlertDialogTitle>
            <AlertDialogDescription></AlertDialogDescription>
            {image && (
              <div className="relative w-full h-64 bg-gray-50">
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  cropShape="round"
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>
            )}
            <AlertDialogFooter className="justify-end gap-2 mt-4">
              <AlertDialogAction
                onClick={handleSave}
                className="px-4 py-2 bg-cyan-500 text-white rounded"
              >
                Rogner
              </AlertDialogAction>
              <AlertDialogCancel
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Annuler
              </AlertDialogCancel>
            </AlertDialogFooter>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ImageUploaderProfil;
