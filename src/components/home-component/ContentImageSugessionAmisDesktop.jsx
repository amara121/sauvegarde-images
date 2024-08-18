"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";

const ContentImageSugessionAmisDesktop = ({ user, width }) => {
  const supabase = createClient();
  const [imagesData, setImagesData] = useState(null);

  useEffect(() => {
    return async () => {
      const { data, error } = await supabase
        .from("images")
        .select("image_url")
        .eq("user_id", user?.id)
        .eq("priver", false)
        .limit(5);

      if (error) {
        console.error(error);
      }
      setImagesData(data);
    };
  }, []);

  return (
    <SimpleBar className={`${width < 270 ? "hidden" : ""} ${imagesData?.length > 0 ? "h-[160px]": "h-0"} w-full`}>
      <div className="flex space-x-3 h-full">
        {imagesData &&
          imagesData.map((image, i) => (
            <div key={i}>
              <Image
                priority={true}
                src={image?.image_url}
                alt="default avatar"
                width={84.375}
                height={150}
                className={`min-w-[84.375px] h-[150px] object-cover  rounded-md`}
              />
            </div>
          ))}
      </div>
    </SimpleBar>
  );
};

export default ContentImageSugessionAmisDesktop;
