"use client"

import ContentRechercheRecente from "@/components/recherche-component/ContentRechercheRecente";
import ContentRechercheResultat from "@/components/recherche-component/ContentRechercheResultat";
import PopupEffacerHistorique from "@/components/recherche-component/PopupEffacerHistorique";
import SimpleBar from "simplebar-react";

const ContentRecherche = () => {
  return (
    <SimpleBar className="flex h-[calc(100vh_-_150px)] md:h-[calc(100vh_-_92px)] px-5 gap-2">
      <div className="flex flex-col h-full gap-5">
        <div className="flex flex-col">
          {/* header récent */}
          <div className="flex items-center justify-between">
            <span className="text-xl">Récents</span>

            <PopupEffacerHistorique />
          </div>

          {/* content récent */}
          <ContentRechercheRecente />
        </div>

        {/* resultat de la recherche */}
        <div className="flex flex-col gap-1">
          <span className="text-xl">Ajouter des amis</span>

          <ContentRechercheResultat />
        </div>
      </div>
    </SimpleBar>
  );
};

export default ContentRecherche;
