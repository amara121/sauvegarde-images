import Image from "next/image";
import LogoPicturAmar from "../LogoPicturAmar";
import { Button } from "../ui/button";
import { SheetProfil } from "./SheetProfil";

const Header = () => {
  return (
    <div className="h-20 w-full flex items-center px-4 border-b">
      <div className="w-full flex justify-between items-center">
        <div>
          <LogoPicturAmar />
        </div>

        {/* <span className="text-3xl font-bold">Explorer</span> */}

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
