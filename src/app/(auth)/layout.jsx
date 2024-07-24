import { CarouselAuth } from "@/components/auth-component/CarouselAuth";
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
          <div className="flex items-center gap-1 font-bold text-gray-700 pb-2">
            <span>Créér avec le</span>{" "}
            <svg
              className="w-6 h-6 text-red-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
            </svg>
            <span>par</span>
            <Link href="http://amarafofana.vercel.app" passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-cyan-300 hover:text-cyan-600"
              >
                Amara Fofana
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
