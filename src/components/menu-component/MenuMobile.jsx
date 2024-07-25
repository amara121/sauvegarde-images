import React from "react";
import { Button } from "../ui/button";

const MenuMobile = () => {
  return (
    <div className="flex w-full h-20 py-4 bg-gradient-to-t from-cyan-200 backdrop-blur-2xl">
      <div className="w-full flex justify-around">
        <Button className="bg-transparent hover:bg-transparent group h-auto flex-col justify-around text-cyan-600 p-0">
          <svg
            className="w-8 h-8 group-hover:text-cyan-950"
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 40.5a16.5 16.5 0 1 0 0-33 16.5 16.5 0 0 0 0 33Zm4.43-14.54c-.12.6-.49 1.12-1.01 1.44l-8.88 5.37a.65.65 0 0 1-.98-.69l2.01-10.18c.12-.6.49-1.12 1.01-1.44l8.88-5.37a.65.65 0 0 1 .98.69l-2.01 10.18Z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m21.92 26.89 3.4-2.05.76-3.9-3.4 2.06-.76 3.89Z"
            ></path>
          </svg>
          <span className="group-hover:text-cyan-950 font-bold text-xs sm:text-base">
            Explorer
          </span>
        </Button>
        <Button className="bg-transparent hover:bg-transparent group h-auto flex-col justify-around text-cyan-600 p-0">
          <svg
            className="w-7 h-7 group-hover:text-cyan-950"
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
              strokeWidth="1.5"
              d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>

          <span className="group-hover:text-cyan-950 font-bold text-xs sm:text-base">
            Mes Photos
          </span>
        </Button>

        <Button className="bg-transparent hover:bg-transparent group h-auto flex-col justify-around text-cyan-600 p-0">
          <svg
            className="w-12 h-12 text-cyan-600 group-hover:text-cyan-950"
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
              d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Button>

        <Button className="bg-transparent hover:bg-transparent group h-auto flex-col justify-around text-cyan-600 p-0">
          <svg
            className="w-6 h-6 group-hover:text-cyan-950"
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
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>

          <span className="group-hover:text-cyan-950 font-bold text-xs sm:text-base">
            Recherche
          </span>
        </Button>
        <Button className="bg-transparent hover:bg-transparent group h-auto flex-col justify-around text-cyan-600 p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 group-hover:text-cyan-950"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
          <span className="group-hover:text-cyan-950 font-bold text-xs sm:text-base">
            Favories
          </span>
        </Button>
      </div>
    </div>
  );
};

export default MenuMobile;
