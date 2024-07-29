"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import SimpleBar from "simplebar-react";
import Link from "next/link";

const SugessionAmisMobile = () => {
  return (
    <SimpleBar className="w-full h-[135px] pt-2 px-2 rounded-md">
      <div className="flex space-x-2 h-full">
        {/* un composant de sugession d'amis */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <div key={i} className="flex relative justify-center">
            <Link
              href={"/amara121"}
              className="flex flex-col items-center gap-1 w-[120px] bg-gray-100 p-2 rounded-md"
            >
              <div
                className={`min-w-[70px] w-[70px] h-[70px] transition-transform duration-200 ease-in flex flex-shrink-0 justify-center border-2 border-cyan-600 rounded-full p-0.5`}
              >
                <Image
                  priority={true}
                  src={"/images/default-avatar.png"}
                  alt="default avatar"
                  width={50}
                  height={50}
                  className={`min-w-[60px] w-[60px] h-[60px] object-cover  rounded-full transition-transform duration-200 ease-in border-2 border-white`}
                />
              </div>
              <div className="flex">
                <span className="font-bold text-nowrap">Amara Fofana</span>
              </div>
            </Link>

            <Button
              className={`absolute bottom-7 h-6 w-16 rounded-full bg-cyan-600 hover:bg-cyan-900 p-0`}
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
        ))}
      </div>
    </SimpleBar>
  );
};

export default SugessionAmisMobile;
