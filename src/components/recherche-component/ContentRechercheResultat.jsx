import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const ContentRechercheResultat = () => {
  return (
    <div className="pb-24 md:pb-4">
      <div className="flex flex-col rounded-lg bg-gray-100">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <div
            key={i}
            className={`flex justify-between items-center p-3 border-b-2 last:border-b-0`}
          >
            {/* photo & nom d'utilisateur */}
            <Link
              href={"/amara121"}
              className={`grow flex flex-row items-center gap-2`}
            >
              {/* photo */}
              <div
                className={`relative min-w-[50px] max-w-[50px] w-[50px] h-[50px] transition-transform duration-200 ease-in flex flex-1 justify-center border-2 border-cyan-600 rounded-full p-0.5`}
              >
                <Image
                  priority={true}
                  src={"/images/default-avatar.png"}
                  alt="default avatar"
                  width={50}
                  height={50}
                  className={`min-w-[42px] max-w-[50px] w-[42px] h-[42px] object-cover  rounded-full transition-transform duration-200 ease-in border-2 border-white`}
                />
              </div>
              {/* nom d'utilisateur */}
              <div className="flex flex-col">
                <span className="font-bold">Amara Fofana</span>
                <span className={`text-sm`}>@amara121</span>
              </div>
            </Link>

            {/* bouton pour follower */}
            <Button
              className={`text-xs h-6 rounded-full bg-cyan-600 hover:bg-cyan-900`}
            >
              Suivre
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentRechercheResultat;
