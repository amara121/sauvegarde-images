"use client";

import DropZone from "@/components/upload-component/DropZone";
import { useState } from "react";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleDrop = (file) => {
    const newImage = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setImage(newImage);
    setError(""); // Reset any previous error
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setImage(null); // Reset the image
  };

  return (
    <main className="w-full min-h-[calc(100vh_-_80px)] flex justify-center bg-slate-50">
      <div className="max-w-5xl w-full bg-white flex justify-center items-center">
        <span className="text-4xl text-gray-600 mx-auto font-bold">Maintenance</span>
        {/* <div className="container mx-auto p-4">
          <h1 className="text-center text-2xl mb-4">Upload Image</h1>
          <DropZone onDrop={handleDrop} onError={handleError} />
          {error && (
            <div className="text-red-500 text-center mt-4">{error}</div>
          )}
          {image && (
            <div className="mt-4">
              <h2 className="text-center text-lg">Preview</h2>
              <img
                src={image.preview}
                alt="Preview"
                className="object-cover w-full h-64"
              />
            </div>
          )}
        </div> */}
      </div>
    </main>
  );
};

export default Upload;
