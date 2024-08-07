"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MesPhotosPriver = () => {
  const supabase = createClient();
  const user_id = supabase.auth.getUser();
  const [mesPhotos, setMesPhotos] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      const { data, error } = await supabase
        .from("images")
        .select("id, nom, image_url, user_id, priver")
        .eq("user_id", (await user_id).data.user.id)
        .eq("priver", true);

      if (error) {
        console.error("impossible de charger les images pour le moment");
      }

      setMesPhotos(data);
      console.log(data);
    };

    fetchPhoto();
  }, []);

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

export default MesPhotosPriver;
