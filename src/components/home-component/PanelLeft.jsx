"use client";

import React from "react";
import SugessionAmisMobile from "./SugessionAmisMobile";
import ExplorerImages from "./ExplorerImages";
import SimpleBar from "simplebar-react";
import { Card } from "../ui/card";

const PanelLeft = ({ users }) => {

  return (
    <SimpleBar className="w-full h-[calc(100vh_-_80px)] flex">
      <div className="w-full h-full flex flex-col text-gray-500 p-2 gap-6">
        {/* <div className="flex">
          <div className="text-3xl mt-2 space-x-2 font-bold">
            <span>Bienvenu</span>
            <span>Amara Fofana!</span>
          </div>
        </div> */}

        <div className="w-full flex lg:hidden flex-col text-gray-500">
          <span className="text-xl font-bold px-2">Sugession d'amis</span>

          <SugessionAmisMobile users={users} />
        </div>

        <div className="w-full flex flex-col mb-20 md:mb-0 pb-3 gap-2">
          <span className="text-xl font-bold px-2">Albums d'amis</span>

          <ExplorerImages />
        </div>
      </div>
    </SimpleBar>
  );
};

export default PanelLeft;
