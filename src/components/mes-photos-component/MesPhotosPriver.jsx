"use client";

import Image from "next/image";
import React from "react";
import SimpleBar from "simplebar-react";

const MesPhotosPriver = () => {
  return (
    <SimpleBar className="w-full h-[calc(100vh_-_180px)] flex">
      <div className="w-full h-full text-gray-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-24 md:pb-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, i) => (
          <div
            key={i}
            className="h-[300px] relative rounded-md overflow-hidden"
          >
            <Image
              priority={true}
              src={"/images/image-carousel-3.jpg"}
              alt="default avatar"
              width={200}
              height={300}
              className={`w-full h-full object-cover rounded-md`}
            />

            <div className="absolute top-3 right-2 flex space-x-2 opacity-100">
              <div className="p-2 bg-cyan-400 hover:bg-cyan-700 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SimpleBar>
  );
};

export default MesPhotosPriver;
