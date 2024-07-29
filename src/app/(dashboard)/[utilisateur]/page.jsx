import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import PanelLeftUtilisateur from "@/components/utilisateur-component/PanelLeftUtilisateur";
import PanelRightUtilisateur from "@/components/utilisateur-component/PanelRightUtilisateur";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

const Utilisateur = async ({ params }) => {
  const supabase = createClient();

  const { data: utilisateur } = await supabase
    .from("users")
    .select("id, nom, prenom, pseudo, photo_url")
    .eq("pseudo", params?.utilisateur);

  console.log(params?.utilisateur);
  console.log(utilisateur);

  if (!utilisateur[0]) {
    return (
      <div className="flex justify-center min-h-[calc(100vh_-_80px)] bg-slate-50">
        <div className="flex flex-col items-center justify-center max-w-5xl w-full bg-white">
          <div>
            <Image
              priority={true}
              src={"/images/image-404.png"}
              alt="default avatar"
              width={300}
              height={150}
              className=" object-cover rounded-full"
            />
          </div>
          <h1 className="text-4xl text-center font-bold text-blue-500">
            page est introuvable
          </h1>
          <p className="mt-4 text-lg text-center text-gray-600">
            Oups! La page que vous cherchez n'existe pas.
          </p>
        </div>
      </div>
    );
  }
  return (
    <main className="w-full min-h-[calc(100vh_-_80px)] flex justify-center bg-slate-50">
      <div className="max-w-5xl w-full bg-white">
        <ResizablePanelGroup
          className="max-w-5xl w-full"
          direction="horizontal"
        >
          <ResizablePanel
            defaultSize={35}
            className="hidden lg:flex min-w-[150px] max-w-[450px]"
          >
            <PanelLeftUtilisateur utilisateur={utilisateur[0]} />
          </ResizablePanel>
          <ResizableHandle withHandle className="hidden lg:flex" />
          <ResizablePanel defaultSize={65} className="">
            <PanelRightUtilisateur />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
};

export default Utilisateur;
