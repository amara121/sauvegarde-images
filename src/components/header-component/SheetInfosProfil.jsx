import { useUser } from "@/lib/stores/user";
import Image from "next/image";
import React from "react";

const SheetInfosProfil = () => {
  const { user } = useUser();

  return (
    <div className="w-full flex flex-col items-center gap-3 border-b pb-4">
      {user?.photo_url ? (
        <Image
          priority={true}
          src={user?.photo_url}
          alt="default avatar"
          width={150}
          height={150}
          className=" object-cover rounded-full"
        />
      ) : (
        <Image
          priority={true}
          src={"/images/default-avatar.png"}
          alt="default avatar"
          width={150}
          height={150}
          className=" object-cover rounded-full"
        />
      )}

      <div className="flex flex-col items-center text-gray-700">
        <div className="space-x-3 text-2xl">
          <span>{user?.prenom}</span>
          <span>{user?.nom}</span>
        </div>
        <span className="font-bold">@{user?.pseudo}</span>
      </div>
    </div>
  );
};

export default SheetInfosProfil;
