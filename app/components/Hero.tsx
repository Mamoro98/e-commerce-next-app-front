import React from "react";
import Gallery from "./Gallery";

const Hero = () => {
  return (
    <div className="flex flex-row ">
      <div className="mt-5 w-fit  ">
        <ul className="flex flex-col justify-evenly text-sm  h-[50vh]  ">
          <li>Women Fashions</li>
          <li>Men Fashions</li>
          <li>Electronics</li>
          <li>Life style</li>
          <li>Medicine </li>
          <li>Sports </li>
          <li>Babys Toys </li>
          <li>Pets</li>
          <li>Health</li>
        </ul>
      </div>
      <div className=" w-[1px] h-[52vh] bg-gray-200 ml-10 "></div>
      <div>
        <Gallery />
      </div>
    </div>
  );
};

export default Hero;
