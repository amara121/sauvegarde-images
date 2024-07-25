"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

const PanelRight = () => {
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
    <div ref={divRef} className="w-full flex">
      <div className="w-full flex flex-col text-gray-500 p-2 gap-4">
        <span className="text-xl font-bold mt-2">Sugession d'amis</span>
        <p>Largeur de la div: {width}px</p>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4 bg-gray-100 px-2 py-4 rounded-md overflow-hidden">
            {/* header (photo, nom d'utilisateur, bouton pour follower) */}
            <div
              className={`${
                width < 270 ? "justify-center" : "justify-between"
              } flex items-end`}
            >
              {/* photo & nom d'utilisateur */}
              <div
                className={`flex ${
                  width < 270 ? "flex-col" : "flex-row"
                } items-center gap-2`}
              >
                {/* photo */}
                <div
                  className={`relative ${
                    width < 270
                      ? "min-w-[100px] w-[100px] h-[100px]"
                      : "min-w-[50px] w-[50px] h-[50px]"
                  } transition-transform duration-200 ease-in flex flex-1 justify-center border-2 border-cyan-600 rounded-full p-0.5`}
                >
                  <Image
                    priority={true}
                    src={"/images/default-avatar.png"}
                    alt="default avatar"
                    width={50}
                    height={50}
                    className={`${
                      width < 270
                        ? "min-w-[90px] w-[90px] h-[90px]"
                        : "min-w-[42px] w-[42px] h-[42px]"
                    } object-cover  rounded-full transition-transform duration-200 ease-in border-2 border-white`}
                  />

                  <Button
                    className={` ${
                      width < 270 ? "flex" : "hidden"
                    } absolute -bottom-1 h-6 w-16 rounded-full bg-cyan-600 hover:bg-cyan-900 p-0`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </div>
                {/* nom d'utilisateur */}
                <div className="flex flex-col">
                  <span className="font-bold">Amara Fofana</span>
                  <span
                    className={`text-sm ${width < 270 ? "hidden" : "inline"}`}
                  >
                    @amara121
                  </span>
                </div>
              </div>

              {/* bouton pour follower */}
              <Button
                className={`${
                  width > 270 ? "flex" : "hidden"
                } text-xs h-6 rounded-full bg-cyan-600 hover:bg-cyan-900`}
              >
                Suivre
              </Button>
            </div>

            {/* content des images */}
            <div className={`${width < 270 ? "hidden" : "grid"} min-w-[424px] mr-2 overflow-hidden grid-cols-4 gap-2 snap-x`}>
              <div className="">
                <Image
                  priority={true}
                  src={"/images/image-carousel-1.jpg"}
                  alt="default avatar"
                  width={100}
                  height={150}
                  className={`min-w-[100px] h-[150px] object-cover  rounded-md`}
                />
              </div>
              <div className="">
                <Image
                  priority={true}
                  src={"/images/image-carousel-1.jpg"}
                  alt="default avatar"
                  width={100}
                  height={150}
                  className={`min-w-[100px] h-[150px] object-cover  rounded-md`}
                />
              </div>
              <div className="">
                <Image
                  priority={true}
                  src={"/images/image-carousel-1.jpg"}
                  alt="default avatar"
                  width={100}
                  height={150}
                  className={`min-w-[100px] h-[150px] object-cover  rounded-md`}
                />
              </div>
              <div className="">
                <Image
                  priority={true}
                  src={"/images/image-carousel-1.jpg"}
                  alt="default avatar"
                  width={100}
                  height={150}
                  className={`min-w-[100px] h-[150px] object-cover  rounded-md`}
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 bg-gray-100 px-2 py-4 rounded-md overflow-hidden">
            {/* header (photo, nom d'utilisateur, bouton pour follower) */}
            <div
              className={`${
                width < 270 ? "justify-center" : "justify-between"
              } flex items-end`}
            >
              {/* photo & nom d'utilisateur */}
              <div
                className={`flex ${
                  width < 270 ? "flex-col" : "flex-row"
                } items-center gap-2`}
              >
                {/* photo */}
                <div
                  className={`relative ${
                    width < 270
                      ? "min-w-[100px] w-[100px] h-[100px]"
                      : "min-w-[50px] w-[50px] h-[50px]"
                  } transition-transform duration-200 ease-in flex flex-1 justify-center border-2 border-cyan-600 rounded-full p-0.5`}
                >
                  <Image
                    priority={true}
                    src={"/images/default-avatar.png"}
                    alt="default avatar"
                    width={50}
                    height={50}
                    className={`${
                      width < 270
                        ? "min-w-[90px] w-[90px] h-[90px]"
                        : "min-w-[42px] w-[42px] h-[42px]"
                    } object-cover  rounded-full transition-transform duration-200 ease-in border-2 border-white`}
                  />

                  <Button
                    className={` ${
                      width < 270 ? "flex" : "hidden"
                    } absolute -bottom-1 h-6 w-16 rounded-full bg-cyan-600 hover:bg-cyan-900 p-0`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </div>
                {/* nom d'utilisateur */}
                <div className="flex flex-col">
                  <span className="font-bold">Amara Fofana</span>
                  <span
                    className={`text-sm ${width < 270 ? "hidden" : "inline"}`}
                  >
                    @amara121
                  </span>
                </div>
              </div>

              {/* bouton pour follower */}
              <Button
                className={`${
                  width > 270 ? "flex" : "hidden"
                } text-xs h-6 rounded-full bg-cyan-600 hover:bg-cyan-900`}
              >
                Suivre
              </Button>
            </div>

            {/* content des images */}
            <div className={`${width < 270 ? "hidden" : "grid"} min-w-[424px] mr-2 overflow-hidden grid-cols-4 gap-2 snap-x`}>
              <div className="">
                <Image
                  priority={true}
                  src={"/images/image-carousel-1.jpg"}
                  alt="default avatar"
                  width={100}
                  height={150}
                  className={`min-w-[100px] h-[150px] object-cover  rounded-md`}
                />
              </div>
              <div className="">
                <Image
                  priority={true}
                  src={"/images/image-carousel-1.jpg"}
                  alt="default avatar"
                  width={100}
                  height={150}
                  className={`min-w-[100px] h-[150px] object-cover  rounded-md`}
                />
              </div>
              <div className="">
                <Image
                  priority={true}
                  src={"/images/image-carousel-1.jpg"}
                  alt="default avatar"
                  width={100}
                  height={150}
                  className={`min-w-[100px] h-[150px] object-cover  rounded-md`}
                />
              </div>
              <div className="">
                <Image
                  priority={true}
                  src={"/images/image-carousel-1.jpg"}
                  alt="default avatar"
                  width={100}
                  height={150}
                  className={`min-w-[100px] h-[150px] object-cover  rounded-md`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelRight;