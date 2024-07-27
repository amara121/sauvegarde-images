"use client";

import React, { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SimpleBar from "simplebar-react";
import UtilisateurPanelPublicImage from "./UtilisateurPanelPublicImage";
import UtilisateurPanelPriverImage from "./UtilisateurPanelPriverImage";
import UtilisateurPanelAimerImage from "./UtilisateurPanelAimerImage";
import UtilisateurPanelFavorie from "./UtilisateurPanelFavorie";
import Image from "next/image";
import { Button } from "../ui/button";

const PanelRightUtilisateur = () => {
  // const [isSticky, setIsSticky] = useState(false);
  // const headerRef = useRef(null);

  // useEffect(() => {
  //   const scrollContainer = document.getElementById("panel-right-utilisateur");

  //   const handleScroll = () => {
  //     if (scrollContainer) {

  //       setIsSticky(scrollContainer.scrollTop > scrollTrigger);
  //       console.log(isSticky);
  //     }
  //   };

  //   console.log(scrollContainer.scrollTop);

  //   if (scrollContainer) {
  //     scrollContainer.addEventListener("scroll", handleScroll);
  //   }

  //   return () => {
  //     if (scrollContainer) {
  //       scrollContainer.removeEventListener("scroll", handleScroll);
  //     }
  //   };

  // }, [scrollContainerId]);

  return (
    <SimpleBar className="w-full h-[calc(100vh_-_80px)] flex">
      <div
        // ref={headerRef}
        // id="panel-right-utilisateur"
        className="w-full h-full flex flex-col text-gray-500 p-2 gap-6"
      >
        <div className="flex lg:hidden flex-col gap-2">
          <div className="flex gap-2">
            <div className="relative w-[90px] h-[90px] rounded-full">
              <Image
                priority={true}
                src={"/images/default-avatar.png"}
                alt="default avatar"
                width={90}
                height={90}
                className={`min-w-[90px] w-[90px] h-[90px] object-cover rounded-full border-2 border-white`}
              />
              <span
                className={`absolute bottom-[14%] right-[6%] w-6 h-6 bg-green-500 border-2 border-white rounded-full animate-ping`}
              ></span>
              <span
                className={`absolute bottom-[15%] right-[7%] w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center`}
              ></span>
            </div>

            <div className="flex flex-col">
              <div className={`w-full flex flex-col -space-y-1`}>
                <div
                  className={`flex gap-2 text-lg items-center font-extrabold`}
                >
                  <span>Amara</span>
                  <span>Fofana</span>
                </div>
                <span className="font-bold text-xs">@amara121</span>
              </div>

              <div className={`w-full grid grid-cols-3`}>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold">5</span>
                  <span className="text-xs text-gray-500">publications</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold">130</span>
                  <span className="text-xs text-gray-500">followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold">160</span>
                  <span className="text-xs text-gray-500">suivi(e)s</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex`}>
            <p className="font-semibold text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in,
              sapiente culpa nam nihil velit sit delectus aut dicta tempora id
              ex architecto facere aspernatur, optio vel, quas excepturi
              accusantium?
            </p>
          </div>

          <div className="w-full max-w-sm flex">
            <Button className="w-full bg-cyan-500">Edit Profil</Button>
          </div>
        </div>
        <Tabs defaultValue="image-public" className={`relative`}>
          <TabsList className={`bg-slate-100 w-full justify-between`}>
            <TabsTrigger
              value="image-public"
              className="w-full gap-1 sm:gap-2 px-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="">Images</span>
            </TabsTrigger>
            <TabsTrigger
              value="image-prive"
              className="w-full gap-1 sm:gap-2 px-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <span className="">Images</span>
            </TabsTrigger>
            <TabsTrigger value="aimer" className="w-full gap-1 sm:gap-2 px-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <span className="">A aimé</span>
            </TabsTrigger>
            <TabsTrigger value="favorie" className="w-full gap-1 sm:gap-2 px-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
              <span className="">Favories</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="image-public">
            <UtilisateurPanelPublicImage />
          </TabsContent>
          <TabsContent value="image-prive">
            <UtilisateurPanelPriverImage />
          </TabsContent>
          <TabsContent value="aimer">
            <UtilisateurPanelAimerImage />
          </TabsContent>
          <TabsContent value="favorie">
            <UtilisateurPanelFavorie />
          </TabsContent>
        </Tabs>
      </div>
    </SimpleBar>
  );
};

export default PanelRightUtilisateur;
