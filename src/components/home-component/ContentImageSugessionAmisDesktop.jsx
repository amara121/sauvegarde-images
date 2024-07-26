"use client";

import Image from "next/image";
import React from "react";
import SimpleBar from "simplebar-react";

const ContentImageSugessionAmisDesktop = ({ width }) => {
  return (
    <SimpleBar className={`${width < 270 ? "hidden" : ""} h-[160px] w-full`}>
      <div className="flex space-x-3 h-full">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i}>
            <Image
              priority={true}
              src={"/images/image-carousel-1.jpg"}
              alt="default avatar"
              width={84.375}
              height={150}
              className={`min-w-[84.375px] h-[150px] object-cover  rounded-md`}
            />
          </div>
        ))}
      </div>
    </SimpleBar>
  );
};

export default ContentImageSugessionAmisDesktop;
