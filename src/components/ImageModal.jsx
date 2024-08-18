"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const ImageModal = ({ open, onOpenChange, imageInfos }) => {
  useEffect(() => {
    console.log(imageInfos);
  }, [imageInfos]);

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger></AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col pt-0 pb-2 h-screen 2xl:h-[80vh] max-w-5xl bg-transparent shadow-none border-none">
        <AlertDialogHeader className="h-0 hidden">
          <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <div className="relative flex-1">
          <Image
            priority={true}
            width={200}
            height={300}
            src={imageInfos?.image_url}
            alt="default avatar"
            className={`absolute inset-0 w-full object-contain h-full`}
          />
        </div>
        <AlertDialogCancel className="absolute top-2 left-2 bg-black bg-opacity-40 text-white h-14 w-14 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </AlertDialogCancel>
        <AlertDialogFooter className="">
          <div className="flex gap-2 h-14 max-w-xl w-full mx-auto">
            <AlertDialogAction className="flex-1 h-full rounded-full bg-cyan-500 hover:bg-cyan-700">
              <Link href={`/${imageInfos?.users.pseudo}`}>Voir le profil</Link>
            </AlertDialogAction>
            <Button className="h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-700">
              <svg
                className="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ImageModal;
