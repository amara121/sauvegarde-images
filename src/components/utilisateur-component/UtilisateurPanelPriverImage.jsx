"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const UtilisateurPanelPriverImage = () => {
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
    <div ref={divRef} className="w-full">
      <div
        className={`w-full grid ${
          width > 716 ? "grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
        } gap-3`}
      >
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div
            key={i}
            className="h-[300px] relative rounded-md overflow-hidden"
          >
            <Image
              priority={true}
              src={"/images/image-carousel-2.jpg"}
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
    </div>
  );
};

export default UtilisateurPanelPriverImage;
