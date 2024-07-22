"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export function CarouselAuth({
  data,
  autoSlide = false,
  autoSlideInterval = 5000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);  // react-hooks/exhaustive-deps

  return (
    <div className="h-[70vh] lg:h-screen xl:h-[70vh] mx-5 flex overflow-hidden relative items-center">
      {data.map((carousel) => (
        <div
          key={carousel.id}
          className="min-w-full h-[70vh] lg:h-[calc(100vh_-_40px)] xl:h-[70vh] relative w-full transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          <div className="flex">
            <Image
              priority={true}
              width={400}
              height={400}
              className="w-full h-[70vh] lg:h-[calc(100vh_-_40px)] xl:h-[70vh] object-cover rounded-lg "
              src={carousel?.image}
              alt="image carousel"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-black-transparent flex items-end rounded-lg ">
            <div className="p-4 mb-16 text-white">
              <svg
                className="w-6 h-6 rotate-180 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg">{carousel?.texte}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="h-[70px] absolute top-0 lg:top-5 right-0 left-0 flex items-center">
        <div className="px-5 flex items-center">
          <Image
            priority={true}
            width={40}
            height={40}
            className="w-12 h-14 object-cover"
            src={"/images/logo-icon.png"}
            alt="image carousel"
          />

          <Image
            priority={true}
            width={200}
            height={40}
            className="w-48 h-16 object-cover"
            src={"/images/logo-texte.png"}
            alt="image carousel"
          />
        </div>
      </div>

      <div className="h-[70vh] lg:h-[calc(100vh_-_40px)] xl:h-[70vh] absolute inset-0 flex items-end justify-end">
        <div className="mb-6 lg:mb-0 xl:mb-10 lg:mr-4">
          <Button
            onClick={prev}
            className="px-2 py-1 lg:px-4 lg:py-2 bg-transparent hover:bg-slate-500 hover:bg-opacity-25"
          >
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </Button>
          <Button
            onClick={next}
            className="px-2 py-1 lg:px-4 lg:py-2 bg-transparent hover:bg-slate-500 hover:bg-opacity-25"
          >
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div className="h-[50px] absolute bottom-5 lg:bottom-8 right-0 left-0 flex items-center justify-center">
        <div className="flex justify-center items-center gap-2">
          {data.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
