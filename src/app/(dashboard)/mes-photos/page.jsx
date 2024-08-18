import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentPhotoPublic from "@/components/mes-photos-component/ContentPhotoPublic";
import ContentPhotoPriver from "@/components/mes-photos-component/ContentPhotoPriver";

const MesPhotos = () => {
  return (
    <main className="w-full min-h-[calc(100vh_-_80px)] flex justify-center bg-slate-50">
      <div className="max-w-5xl w-full bg-white flex flex-col gap-2 pt-3 px-4">
        <span className="text-2xl font-bold px-2 text-gray-600">
          Mes Photos
        </span>

        <Tabs defaultValue="image-public" className={`relative`}>
          <div className="w-full bg-slate-100">
            <TabsList
              className={`bg-slate-100 max-w-xs w-full justify-between`}
            >
              <TabsTrigger
                value="image-public"
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
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <span className="">Images</span>
              </TabsTrigger>
              <TabsTrigger
                value="image-prive"
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
                <span className="">Images</span>
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="image-public">
            <ContentPhotoPublic />
          </TabsContent>
          <TabsContent value="image-prive">
            <ContentPhotoPriver />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default MesPhotos;
