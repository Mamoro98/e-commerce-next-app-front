"use client";
import React, { useRef } from "react";
import HeadTag from "../components/HeadTag";
import Card from "../components/Card";

const BestSelling = () => {
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
    <div className="flex flex-col mt-24  h-[100vh]  ">
      <div>
        <HeadTag tagname={"This Month"} />
      </div>
      <div className="flex flex-row w-full justify-between mt-[2em] ">
        <p className="font-bold text-black text-2xl tracking-wider ">
          Best Selling Products
        </p>
        <div className="flex flex-row justify-center w-[8em] h-[7vh] text-white rounded-sm content-center bg-red-500  ">
          <button>View All</button>
        </div>
      </div>
      <div className="relative mt-[2em]">
        <div className="absolute w-[70em] h-[57vh]   top-[100%] overflow-hidden   ">
          <div
            className=" w-full h-full absolute top-0 left-0 overflow-scroll no-scrollbar  "
            ref={scrollref}
          >
            <div className="absolute  top-0 left-0 h-full w-[150em]   ">
              <div className="flex flex-row justify-around relative   ">
                {cardsdata.map((card, i) => {
                  return (
                    <div className=" relative items-center  w-[20em] h-full ">
                      <Card />
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

export default BestSelling;
