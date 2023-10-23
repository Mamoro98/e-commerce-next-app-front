"use client";
import React, { useRef } from "react";
import HeadTag from "../components/HeadTag";
import Card from "../components/Card";
import CategoryCard from "../components/CategoryCard";

const BrowseCategory = () => {
  const scrollref = useRef<HTMLDivElement>(null);
  const cardsdata = [1, 2, 3, 4, 5, 6];
  function scrollLeft() {
    scrollref.current!.scrollTo({
      left: scrollref.current!.scrollLeft - 300,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    scrollref.current!.scrollBy({
      left: scrollref.current!.scrollLeft + 300,
      behavior: "smooth",
    });
  }
  return (
    <div className="flex flex-col mt-24  h-[65vh]  ">
      <div>
        <HeadTag tagname={"Categories"} />
      </div>
      <div className="flex flex-row w-full justify-between mt-[2em] ">
        <p className="font-bold text-black text-2xl tracking-wider ">
          Browse By Category
        </p>
        <div className="flex flex-row w-[8%] justify-between ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 bg-gray-300 rounded-full p-2 cursor-pointer "
            onClick={scrollLeft}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 bg-gray-300 rounded-full p-2 cursor-pointer "
            onClick={scrollRight}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </div>
      <div className="relative mt-[2em]">
        <div className="absolute w-[70em] h-[37vh]   top-[100%] overflow-hidden   ">
          <div
            className=" w-full h-full absolute top-0 left-0 overflow-scroll no-scrollbar  "
            ref={scrollref}
          >
            <div className="absolute  top-0 left-0 h-full w-[100em]   ">
              <div className="flex flex-row justify-around relative   ">
                {cardsdata.map((card, i) => {
                  return (
                    <div className=" relative items-center  w-[15em] h-[35vh] ">
                      <CategoryCard />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;
