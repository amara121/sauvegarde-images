import Image from "next/image";
import LogoPicturAmar from "../LogoPicturAmar";
import { Button } from "../ui/button";
import { SheetProfil } from "./SheetProfil";
import { Separator } from "../ui/separator";

const Header = () => {
  return (
    <div className="h-20 w-full flex items-center px-8 border-b">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <LogoPicturAmar />

          <Separator className=" h-14" orientation="vertical" />

          <div className="ml-3">Input de recherche</div>
        </div>

        <div className="flex items-center">
          <div></div>

          <div className="flex items-center">
            <SheetProfil />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
