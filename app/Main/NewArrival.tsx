import React from "react";
import HeadTag from "../components/HeadTag";
import Image from "next/image";
import ps5 from "../../public/images/ps5.png";
import woman from "../../public/images/woman.png";
import speakers from "../../public/images/speakers.png";
import TextInItem from "../components/TextInItem";

const NewArrival = () => {
  return (
    <div className="mt-16">
      <div>
        <HeadTag tagname={"Featured"} />
      </div>
      <div className="flex flex-row w-full justify-between mt-[2em] ">
        <p className="font-bold text-black text-2xl tracking-wider ">
          New Arrival
        </p>
      </div>
      <div className="grid grid-cols-4 grid-rows-2  h-[70vh] gap-4 mt-12">
        <div className="col-span-2 row-span-2 bg-black place-items-center rounded-sm relative">
          <div className="flex w-full h-full justify-center">
            <Image
              src={ps5}
              alt="ps5"
              width={300}
              height={300}
              className="place-self-center"
            />
          </div>
          <TextInItem
            headtext="Playstation 5"
            desc="Black and White version of the PS5 coming out on sale."
            buttontext="Shop Now"
            classes="absolute top-[18em] left-[2em] flex flex-col h-[12vh] text-white"
          />
        </div>
        <div className="col-span-2 row-span-1 bg-[#0d0d0d] rounded-sm relative">
          <div className="flex justify-end">
            <Image src={woman} alt="woman" width={300} height={300} />
          </div>
          <TextInItem
            headtext="Women’s Collections"
            desc="Featured woman collections that give you another vibe."
            buttontext="Shop Now"
            classes="absolute top-[3em] left-[2em] flex flex-col h-[12vh] text-white"
          />
        </div>
        <div className="col-span-1 row-span-1 bg-black place-items-center rounded-sm relative">
          <div className="flex w-full h-full justify-center">
            <Image
              src={speakers}
              alt="ps5"
              width={130}
              height={130}
              className="place-self-center"
            />
          </div>
          <TextInItem
            headtext="Speakers"
            desc="Amazon wireless speakers"
            buttontext="Shop Now"
            classes="absolute top-[6em] left-[1em] flex flex-col h-[12vh] text-white"
          />
        </div>
        <div className="col-span-1 row-span-1 bg-black place-items-center rounded-sm relative">
          <div className="flex w-full h-full justify-center">
            <Image
              src={speakers}
              alt="ps5"
              width={130}
              height={130}
              className="place-self-center"
            />
          </div>
          <TextInItem
            headtext="Speakers"
            desc="Amazon wireless speakers"
            buttontext="Shop Now"
            classes="absolute top-[6em] left-[1em] flex flex-col h-[12vh] text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
