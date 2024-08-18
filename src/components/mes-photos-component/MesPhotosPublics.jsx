"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MesPhotosPublics = ({ utilisateur = null }) => {
  const supabase = createClient();
  const user_id = supabase.auth.getUser();
  const [mesPhotos, setMesPhotos] = useState(null);

  useEffect(() => {
    if (utilisateur) {
      return async () => {
        const { data, error } = await supabase
          .from("images")
          .select("id, nom, image_url, user_id, priver")
          .eq("user_id", utilisateur?.id)
          .eq("priver", false);

        if (error) {
          console.error("impossible de charger les images pour le moment");
        }

        setMesPhotos(data);
        console.log(data);
      };
    }

    return async () => {
      const { data, error } = await supabase
        .from("images")
        .select("id, nom, image_url, user_id, priver")
        .eq("user_id", (await user_id).data.user.id)
        .eq("priver", false);

      if (error) {
        console.error("impossible de charger les images pour le moment");
      }

      setMesPhotos(data);
      console.log(data);
    };
  }, [utilisateur]);

  return (
    <>
      {mesPhotos ? (
        mesPhotos.length !== 0 ? (
          mesPhotos?.map((photo, i) => (
            <div
              key={i}
              className="h-[300px] relative rounded-md overflow-hidden"
            >
              <Image
                priority={true}
                src={photo?.image_url}
                alt="default avatar"
                width={200}
                height={300}
                className={`w-full h-full object-cover rounded-md`}
              />

              <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-50 backdrop-blur-sm flex items-center px-2 gap-4">
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
          ))
        ) : (
          <p>pas d'image pour le moment</p>
        )
      ) : (
        <p>chargement</p>
      )}
    </>
  );
};

export default MesPhotosPublics;
