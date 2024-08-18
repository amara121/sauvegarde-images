"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createClient } from "@/utils/supabase/client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../../app/globals.css";
import { Button } from "../ui/button";
import ImageModal from "../ImageModal";

// import Modal from 'react-modal';

const supabase = createClient();
const user_id = supabase.auth.getUser()
const PAGE_SIZE = 10;

const fetchImages = async () => {
  const { data, error } = await supabase
    .from("images") // Nom de votre table contenant les images
    .select(
      `*, 
      users (
        id,
        pseudo,
        nom,
        prenom,
        photo_url
      )`
    )
    .eq("priver", false)
    .neq("user_id", (await user_id).data.user.id);

  if (error) {
    console.error("Error fetching images:", error);
    return [];
  }

  // image.users?.name
  // console.log(
  //   supabase.storage
  //     .from("images_public")
  //     .getPublicUrl(`${data[0].users?.pseudo}/${data[0].nom}`, {
  //       transform: {
  //         width: 250,
  //         height: 150,
  //       },
  //     })
  // );

  return data
};

const ExplorerImages = () => {
  const [images, setImages] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImageModal, setSelectedImageModal] = useState(null);

  const [width, setWidth] = useState(0);
  const divRef = useRef(null);
  const slideCarousel = useRef(null);

  // la taille du conteneur pour mieux gerer le responsible
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        setWidth(Math.floor(entries[0].contentRect.width));
      }
    });

    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        resizeObserver.unobserve(divRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      const newImages = await fetchImages();
      setImages(newImages);
      setDisplayedImages(newImages.slice(0, PAGE_SIZE));
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (inView && images.length > 0) {
      const nextIndex = (currentIndex + PAGE_SIZE) % images.length;
      const newDisplayedImages = displayedImages.concat(
        images.slice(nextIndex, nextIndex + PAGE_SIZE)
      );
      setDisplayedImages(newDisplayedImages);
      setCurrentIndex(nextIndex);
    }
  }, [inView]);

  const openModal = (image) => {
    setSelectedImageModal(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log(slideCarousel.current);
  }, []);

  return (
    <div>
      <ImageModal open={isModalOpen} imageInfos={selectedImageModal} onOpenChange={closeModal} />
      <div
        ref={divRef}
        className={`w-full grid ${
          width > 736 ? "grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
        } gap-3`}
      >
        {/* les photos */}
        {displayedImages?.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            onClick={() => openModal(image)}
            className="relative w-auto h-[300px] flex flex-col rounded-md overflow-hidden group"
          >
            <Image
              priority={true}
              width={200}
              height={300}
              src={image?.image_url}
              alt="default avatar"
              className={`absolute inset-0 w-full object-cover h-full`}
            />

            <Link
              href={"#"}
              className="absolute bottom-0 left-0 w-full h-1/4 bg-black bg-opacity-50 backdrop-blur-sm flex items-center px-2 gap-2"
            >
              <div className="min-w-[45px] w-[45px] h-[45px] border-2 border-cyan-600 rounded-full p-0.5">
                <Image
                  priority={true}
                  src={image?.users.photo_url}
                  alt="default avatar"
                  width={50}
                  height={50}
                  className={` min-w-[37px] w-[37px] h-[37px] object-cover  rounded-full transition-transform duration-200 ease-in border-2 border-white`}
                />
              </div>
              <div className="flex flex-col -space-y-1 text-white">
                <span className="font-bold">{image?.users.prenom} {image?.users.nom}</span>
                <span className="text-xs">@{image?.users.pseudo}</span>
              </div>
            </Link>

            {/* <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 bg-cyan-400 hover:bg-cyan-700 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </button>
              <button className="p-2 bg-cyan-400 hover:bg-cyan-700 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="p-2 bg-cyan-400 hover:bg-cyan-700 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm5.845 17.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V12a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                    clipRule="evenodd"
                  />
                  <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                </svg>
              </button>
            </div> */}
          </div>
        ))}
      </div>

      <div ref={ref} className="col-span-full text-center">
        <p>Chargement...</p>
      </div>

      {/* <Modal isOpen={isModalOpen} onRequestClose={closeModal} onOpenChange={closeModal}>
        <Carousel selectedItem={selectedImageIndex} showThumbs={false}>
          {images.map((image, index) => (
            <div key={`${image.id}-${index}`}>
              <img src={image.url} alt={image.description || "Image"} />
            </div>
          ))}
        </Carousel>
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 m-4 text-white"
        >
          Close
        </button>
      </Modal> */}
    </div>
  );
};

export default ExplorerImages;
