"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const ExplorerImages = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        setWidth(Math.floor(entries[0].contentRect.width));
      }
    });

    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        resizeObserver.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div ref={divRef} className={`w-full grid ${
      width > 736 ? "grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
    } gap-3`}>
      {/* les photos */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
        <div
          key={i}
          className="relative w-auto h-[300px] flex flex-col rounded-md overflow-hidden group"
        >
          <Image
            priority={true}
            width={200}
            height={300}
            src={"/images/image-carousel-1.jpg"}
            alt="default avatar"
            className={`absolute inset-0 w-full object-cover h-full`}
          />

          <Link
            href={"#"}
            className="absolute bottom-0 left-0 w-full h-1/4 bg-black bg-opacity-50 backdrop-blur-sm flex items-center px-2 gap-2"
          >
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

          <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-2 bg-cyan-400 hover:bg-cyan-700 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>
            <button className="p-2 bg-cyan-400 hover:bg-cyan-700 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="p-2 bg-cyan-400 hover:bg-cyan-700 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm5.845 17.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V12a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                  clipRule="evenodd"
                />
                <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExplorerImages;
