import Header from "@/components/header-component/Header";
import MenuDesktop from "@/components/menu-component/MenuDesktop";
import MenuMobile from "@/components/menu-component/MenuMobile";

const layout = async ({ children }) => {
  return (
    <div className="flex flex-col">
      {/* le header */}
      <div className="w-full h-20">
        <Header />
      </div>

      {/* menu & content */}
      <div className="relative grid md:grid-cols-[150px_minmax(320px,_1fr)] max-h-[calc(100vh_-_80px)] overflow-y-scroll">
        {/* menu */}
        <div className="relative hidden md:flex">
          <MenuDesktop />
        </div>

        {/* content */}
        {children}

        <div className="md:hidden fixed bottom-0 left-0 right-0">
          <MenuMobile />
        </div>
      </div>
    </div>
  );
};

export default layout;
