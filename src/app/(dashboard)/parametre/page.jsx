import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ParametreProfil from "@/components/parametre-component/ParametreProfil";

const Parametre = () => {
  return (
    <main className="w-full min-h-[calc(100vh_-_80px)] flex justify-center bg-slate-50">
      <div className="max-w-5xl w-full bg-white flex flex-col gap-2 pt-3 ">
        <span className="text-2xl font-bold px-5 text-gray-600">Paramètre</span>

        <Tabs defaultValue="profil" className={`relative`}>
          <div className="px-4 w-full bg-slate-100">
            <TabsList
              className={`bg-slate-100 max-w-xs w-full justify-between`}
            >
              <TabsTrigger
                value="profil"
                className="w-full gap-1 sm:gap-2 px-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <span className="">Profil</span>
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className="w-full gap-1 sm:gap-2 px-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <span className="">Mot de passe</span>
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="profil">
            <ParametreProfil />
          </TabsContent>
          <TabsContent value="password">
            {/* <MesPhotosPriver /> */}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Parametre;
