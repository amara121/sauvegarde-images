"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import MesPhotosPublics from "../mes-photos-component/MesPhotosPublics";

const UtilisateurPanelPublicImage = () => {
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
        } gap-3 pb-24 md:pb-3`}
      >
        <MesPhotosPublics />
      </div>
    </div>
  );
};

export default UtilisateurPanelPublicImage;
