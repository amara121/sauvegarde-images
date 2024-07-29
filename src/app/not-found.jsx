// app/not-found/page.js
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
      <h1 className="text-4xl text-center font-bold text-blue-500">page est introuvable</h1>
      <p className="mt-4 text-lg text-center text-gray-600">
        Oups! La page que vous cherchez n'existe pas.
      </p>
      <Link href="/" legacyBehavior>
        <a className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800">
          Retour à l'accueil
        </a>
      </Link>
    </div>
  );
}
