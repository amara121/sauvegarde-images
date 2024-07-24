import React from "react";
import { Button } from "../ui/button";

const Menu = () => {
  return (
    <div className="min-h-[calc(100vh_-_80px)] w-[150px] py-5 px-2 fixed border-r ">
      <div className="w-full flex flex-col gap-1">
        <Button className="bg-transparent hover:bg-transparent group h-auto flex-col text-gray-700">
          <svg
            className="w-12 h-12 group-hover:text-cyan-500"
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
          <span className="group-hover:text-cyan-500">Explorer</span>
        </Button>
        <Button className="bg-transparent hover:bg-transparent group h-auto flex-col text-gray-700">
          <svg
            className="w-9 h-9 group-hover:text-cyan-500"
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

          <span className="group-hover:text-cyan-500">Mes Photos</span>
        </Button>
        <Button className="bg-transparent hover:bg-transparent group h-auto flex-col text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 group-hover:text-cyan-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
          <span className="group-hover:text-cyan-500">Favories</span>
        </Button>

        <Button className="bg-transparent hover:bg-transparent group h-auto flex-col text-gray-700">
          <svg
            stroke="currentColor"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            className="w-7 h-7 group-hover:text-cyan-500"
          >
            <path d="m13,20.5c0,.276-.224.5-.5.5H4.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C0,2.019,2.019,0,4.5,0h12c2.481,0,4.5,2.019,4.5,4.5v8c0,.276-.224.5-.5.5s-.5-.224-.5-.5V4.5c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v8.336l3.811-3.811c1.322-1.322,3.628-1.322,4.95,0l7.094,7.122c.195.195.194.512,0,.707-.098.097-.226.146-.353.146-.128,0-.256-.049-.354-.147l-7.094-7.121c-.943-.943-2.591-.944-3.535,0L1,14.25v2.25c0,1.93,1.57,3.5,3.5,3.5h8c.276,0,.5.224.5.5Zm4-15c0,1.379-1.122,2.5-2.5,2.5s-2.5-1.121-2.5-2.5,1.122-2.5,2.5-2.5,2.5,1.121,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5.673,1.5,1.5,1.5,1.5-.673,1.5-1.5Zm7.5,13.5h-3.5v-3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v3.5h-3.5c-.276,0-.5.224-.5.5s.224.5.5.5h3.5v3.5c0,.276.224.5.5.5s.5-.224.5-.5v-3.5h3.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Z" />
          </svg>

          <span className="group-hover:text-cyan-500">Upload</span>
        </Button>
      </div>
    </div>
  );
};

export default Menu;
