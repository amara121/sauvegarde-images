"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import { Button } from "../ui/button";

const PanelLeftUtilisateur = () => {
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
      <SimpleBar className="w-full flex h-[calc(100vh_-_80px)] px-2 gap-2">
        <div
          className={`flex flex-col items-center space-y-4 h-full py-4 ${
            width < 290 ? "px-0" : "px-4"
          } text-gray-700`}
        >
          {/* <p>Largeur de la div: {width}px</p> */}
          <div className="relative rounded-full">
            <Image
              priority={true}
              src={"/images/default-avatar.png"}
              alt="default avatar"
              width={296}
              height={296}
              className={` ${
                width < 290
                  ? "min-w-[143px] w-[143px] h-[143px]"
                  : "min-w-[296px] w-[296px] h-[296px]"
              } object-cover rounded-full border-2 border-white`}
            />
            <span
              className={`absolute  ${
                width < 290
                  ? "bottom-[15%] right-[7%]"
                  : "bottom-[18%] right-[10%]"
              } w-6 h-6 bg-green-500 border-2 border-white rounded-full animate-ping`}
            ></span>
            <span
              className={`absolute  ${
                width < 290
                  ? "bottom-[16%] right-[8%]"
                  : "bottom-[19%] right-[11%]"
              }  w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center`}
            ></span>
          </div>

          <div
            className={`w-full flex flex-col items-center`}
          >
            <div
              className={`flex ${
                width < 290
                  ? "gap-2 text-lg"
                  : "gap-3 text-2xl"
              } items-center font-extrabold`}
            >
              <span>Amara</span>
              <span>Fofana</span>
            </div>
            <span className="font-bold">@amara121</span>
          </div>

          <div
            className={`w-full grid ${
              width < 290 ? "grid-cols-1" : "grid-cols-3"
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold">5</span>
              <span className="text-sm text-gray-500">publications</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold">130</span>
              <span className="text-sm text-gray-500">followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold">160</span>
              <span className="text-sm text-gray-500">suivi(e)s</span>
            </div>
          </div>

          <div className={`${width < 290 ? "hidden" : "flex"}`}>
            <p className="font-semibold text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in,
              sapiente culpa nam nihil velit sit delectus aut dicta tempora id
              ex architecto facere aspernatur, optio vel, quas excepturi
              accusantium?
            </p>
          </div>

          <div className="w-full flex">
            <Button className="w-full bg-cyan-500">Edit Profil</Button>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
};

export default PanelLeftUtilisateur;
