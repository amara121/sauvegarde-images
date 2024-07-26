import { CarouselAuth } from "@/components/auth-component/CarouselAuth";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
// import vectorLogin  from "../public/images/vector_login.png";

const dataImages = [
  {
    id: 1,
    texte:
      "Capturez et partagez vos moments précieux. Créez un compte et rejoignez notre communauté d'amateurs de belles images",
    image: "/images/image-carousel-1.jpg",
  },
  {
    id: 2,
    texte:
      "Chaque photo raconte une histoire unique. Partagez la vôtre et inspirez les autres en créant votre galerie d'images.",
    image: "/images/image-carousel-2.jpg",
  },
  {
    id: 3,
    texte:
      "Une image vaut mille mots. Qu'avez-vous à dire ? Inscrivez-vous et commencez à poster vos moments inoubliables.",
    image: "/images/image-carousel-3.jpg",
  },
  {
    id: 4,
    texte:
      "Voyez le monde à travers des yeux différents. Partagez vos photos et connectez-vous avec d'autres passionnés.",
    image: "/images/image-carousel-4.jpg",
  },
  {
    id: 5,
    texte:
      "Transformez chaque instant en souvenir précieux. Rejoignez-nous et partagez vos images avec notre communauté.",
    image: "/images/image-carousel-5.jpg",
  },
];

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="max-w-6xl w-full py-5 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0">
        <div className="flex justify-center items-center">
          <CarouselAuth autoSlide={true} data={dataImages} />
        </div>

        <div className="flex flex-col gap-3 justify-between items-center">
          <div className="flex-1 flex items-center">{children}</div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
