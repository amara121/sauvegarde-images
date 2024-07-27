import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import PanelLeftUtilisateur from "@/components/utilisateur-component/PanelLeftUtilisateur";
import PanelRightUtilisateur from "@/components/utilisateur-component/PanelRightUtilisateur";

const Utilisateur = () => {
  return (
    <main className="w-full min-h-[calc(100vh_-_80px)] flex justify-center bg-slate-50">
      <div className="max-w-5xl w-full bg-white">
        <ResizablePanelGroup
          className="max-w-5xl w-full"
          direction="horizontal"
        >
          <ResizablePanel defaultSize={35} className="hidden lg:flex min-w-[150px] max-w-[450px]">
            <PanelLeftUtilisateur />
          </ResizablePanel>
          <ResizableHandle withHandle className="hidden lg:flex" />
          <ResizablePanel
            defaultSize={65}
            className=""
          >
            <PanelRightUtilisateur />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
};

export default Utilisateur;
