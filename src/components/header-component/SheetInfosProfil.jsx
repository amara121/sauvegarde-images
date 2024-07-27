import Image from "next/image";
import React from "react";

const SheetInfosProfil = () => {
  return (
    <div className="w-full flex flex-col items-center gap-3 border-b pb-4">
      <Image
        priority={true}
        src={"/images/default-avatar.png"}
        alt="default avatar"
        width={150}
        height={150}
        className=" object-cover rounded-full"
      />

      <div className="flex flex-col items-center text-gray-700">
        <div className="space-x-3 text-2xl">
          <span>Amara</span>
          <span>Fofana</span>
        </div>
        <span className="font-bold">@amara121</span>
      </div>
    </div>
  );
};

export default SheetInfosProfil;
