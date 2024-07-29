import PhotosFavories from "@/components/favorie-component/PhotosFavories";
import React from "react";

const Favorie = () => {
  return (
    <main className="w-full min-h-[calc(100vh_-_80px)] flex justify-center bg-slate-50">
      <div className="max-w-5xl w-full bg-white flex flex-col gap-2 pt-3 px-4">
        <span className="text-2xl font-bold px-2 text-gray-600">
          Mes Favories
        </span>

        <PhotosFavories />
      </div>
    </main>
  );
};

export default Favorie;
