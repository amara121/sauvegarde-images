import { CarouselAuth } from "@/components/auth-component/CarouselAuth";
import Image from "next/image";
// import vectorLogin  from "../public/images/vector_login.png";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="max-w-6xl w-full pb-4 grid grid-cols-1 sm:grid-cols-2">
        <div className="flex justify-center items-center">
          <CarouselAuth />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
