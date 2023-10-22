import React from "react";
import test from "../../public/images/Frame 560.png";
import Image from "next/image";
import Carousel from "./Carousel";
const Gallery = () => {
  const slides = [
    "/images/Frame 560.png",
    "/images/Frame 560.png",
    "/images/Frame 560.png",
    "/images/Frame 560.png",
  ];
  return (
    <div className="relative  h-[52vh]">
      <div className="p-8 w-[46em]">
        <Carousel slides={slides} autoSlide={true} />
      </div>
    </div>
  );
};

export default Gallery;
