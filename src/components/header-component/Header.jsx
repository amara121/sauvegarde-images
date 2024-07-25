import Image from "next/image";
import LogoPicturAmar from "../LogoPicturAmar";
import { Button } from "../ui/button";
import { SheetProfil } from "./SheetProfil";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";

const Header = () => {
  return (
    <div className="h-20 w-full flex items-center px-2 md:px-8 border-b">
      <div className="w-full flex justify-between items-center">
        <div className="flex grow items-center gap-4">
          <LogoPicturAmar />

          <Separator className="hidden md:flex h-14" orientation="vertical" />

          <div className="hidden grow ml-3 max-w-xs md:flex items-center">
            <Input placeholder="Rechercher un amis..." className="w-full -mr-8 rounded-full" />
            <svg
              className="w-6 h-6 text-cyan-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            <SheetProfil />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
