"use client";

import ImageUpload from "@/components/upload-component/ImageUpload";
import SimpleBar from "simplebar-react";

const Upload = () => {
  return (
    <div className="w-full min-h-[calc(100vh_-_80px)] h-full flex justify-center bg-slate-50">
      <div className="max-w-5xl w-full bg-white flex flex-col">
        <SimpleBar className="w-full flex h-[calc(100vh_-_80px)] pt-3">
          <div className="w-full h-full flex flex-col items-center pb-24 px-2 md:pb-3">
            <h1 className="text-center text-2xl mb-4">Upload Image</h1>
            <ImageUpload />
          </div>
        </SimpleBar>
      </div>
    </div>
  );
};

export default Upload;
