"use client";

import LogoPicturAmar from "../LogoPicturAmar";
import { SheetProfil } from "./SheetProfil";
import { Separator } from "../ui/separator";
import Link from "next/link";
import RechercheInput from "../recherche-component/RechercheInput";

const Header = () => {
  return (
    <div className="h-20 w-full flex items-center px-2 md:px-8 border-b">
      <div className="w-full flex justify-between items-center">
        <div className="flex grow items-center gap-4">
          <LogoPicturAmar />

          <Separator className="hidden md:flex h-14" orientation="vertical" />

          <Link
            className="hidden md:flex items-center grow ml-3 max-w-xs"
            href="/recherche"
          >
            {/* ce component se trouve dans le dossier components/recherche-component */}
            <RechercheInput />
          </Link>
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
