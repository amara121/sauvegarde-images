import Header from "@/components/header-component/Header";
import Menu from "@/components/menu-component/Menu";

const layout = async ({ children }) => {
  return (
    <div className="flex flex-col">
      {/* le header */}
      <div className="w-full h-20">
        <Header />
      </div>

      {/* menu & content */}
      <div className="grid grid-cols-[150px_minmax(320px,_1fr)] max-h-[calc(100vh_-_80px)] overflow-y-scroll">
        {/* menu */}
        <div className="relative">
          <Menu />
        </div>

        {/* content */}
        {children}
      </div>
    </div>
  );
};

export default layout;
