"use client";

import React from "react";
import SimpleBar from "simplebar-react";
import MesPhotosPriver from "./MesPhotosPriver";

const ContentPhotoPriver = () => {
  return (
    <SimpleBar className="w-full h-[calc(100vh_-_180px)] flex">
      <div className="w-full h-full text-gray-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-24 md:pb-3">
        <MesPhotosPriver />
      </div>
    </SimpleBar>
  );
};

export default ContentPhotoPriver;
