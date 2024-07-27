import PanelLeft from "@/components/home-component/PanelLeft";
import PanelRight from "@/components/home-component/PanelRight";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <main className="w-full min-h-[calc(100vh_-_80px)] flex justify-center bg-slate-50">
      <div className="max-w-5xl w-full bg-white">
        <ResizablePanelGroup
          className="max-w-5xl w-full"
          direction="horizontal"
        >
          <ResizablePanel defaultSize={65} className="">
            <PanelLeft />
          </ResizablePanel>
          <ResizableHandle withHandle className="hidden lg:flex" />
          <ResizablePanel
            defaultSize={35}
            className="hidden lg:flex min-w-[150px] max-w-[450px]"
          >
            <PanelRight />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
}
