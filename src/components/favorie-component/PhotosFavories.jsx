"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import SimpleBar from "simplebar-react";

const PhotosFavories = () => {
  return (
    <SimpleBar className="w-full h-[calc(100vh_-_135px)] flex">
      <div className="w-full h-full text-gray-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-24 md:pb-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, i) => (
          <div
            key={i}
            className="h-[300px] relative rounded-md overflow-hidden"
          >
            <Image
              priority={true}
              src={"/images/image-carousel-5.jpg"}
              alt="default avatar"
              width={200}
              height={300}
              className={`w-full h-full object-cover rounded-md`}
            />

            {/* footer de l'image */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-50 backdrop-blur-sm flex items-center px-2 gap-4">
              {/* profil de l'utilisateur dont l'image a été aimé */}
              <Link href={"#"} className=" w-full flex items-center gap-2">
                <div className="min-w-[45px] w-[45px] h-[45px] border-2 border-cyan-600 rounded-full p-0.5">
                  <Image
                    priority={true}
                    src={"/images/default-avatar.png"}
                    alt="default avatar"
                    width={50}
                    height={50}
                    className={` min-w-[37px] w-[37px] h-[37px] object-cover  rounded-full transition-transform duration-200 ease-in border-2 border-white`}
                  />
                </div>
                <div className="flex flex-col -space-y-1 text-white">
                  <span className="font-bold">Amara Fofana</span>
                  <span className="text-xs">@amara121</span>
                </div>
              </Link>
              <div className="flex flex-col gap-2">
                <div className="flex text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <span>48</span>
                </div>
                <div className="flex text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                  </svg>
                  <span>12</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SimpleBar>
  );
};

export default PhotosFavories;
