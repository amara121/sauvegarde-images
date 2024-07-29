import ContentRecherche from "@/components/recherche-component/ContentRecherche";
import RechercheInput from "@/components/recherche-component/RechercheInput";
import React from "react";

const Recherche = () => {
  return (
    <main className="w-full min-h-[calc(100vh_-_80px)] flex justify-center bg-slate-50">
      <div className="max-w-5xl w-full bg-white text-gray-600 flex flex-col gap-3 pt-3">
        <div className="px-3 flex md:hidden justify-center">
          <RechercheInput />
        </div>

        {/* recherche récente */}
        <ContentRecherche />
      </div>
    </main>
  );
};

export default Recherche;
