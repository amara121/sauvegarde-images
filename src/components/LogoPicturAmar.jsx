import Image from "next/image";
import React from "react";

const LogoPicturAmar = () => {
  return (
    <div className="flex items-center">
      <Image
        priority={true}
        width={40}
        height={40}
        className="w-12 h-14 object-cover"
        src={"/images/logo-icon.png"}
        alt="image carousel"
      />

      <Image
        priority={true}
        width={200}
        height={40}
        className="w-48 h-16 object-cover"
        src={"/images/logo-texte.png"}
        alt="image carousel"
      />
    </div>
  );
};

export default LogoPicturAmar;
