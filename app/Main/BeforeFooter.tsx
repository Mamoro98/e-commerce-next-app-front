import Image from "next/image";
import React from "react";
import delivery from "../../public/images/delivery.png";
const BeforeFooter = () => {
  return (
    <div className="flex flex-row w-full justify-evenly mt-36  ">
      <div className="flex flex-col justify-center items-center h-36 ">
        <div className="rounded-full bg-slate-500 w-16 h-16 flex flex-row justify-center items-center ">
          <div className="bg-black rounded-full flex flex-row justify-center text-center items-center w-12 h-12 p-1">
            <Image src={delivery} alt="delivery" width={150} height={150} />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-4 text-black">
          FREE AND FAST DELIVERY
        </h2>
        <span>Free delivery for all orders over $140</span>
      </div>
      <div className="flex flex-col justify-center items-center h-36 ">
        <div className="rounded-full bg-slate-500 w-16 h-16 flex flex-row justify-center items-center ">
          <div className="bg-black rounded-full flex flex-row justify-center text-center items-center w-12 h-12 p-1">
            <Image src={delivery} alt="delivery" width={150} height={150} />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-4 text-black">
          FREE AND FAST DELIVERY
        </h2>
        <span>Free delivery for all orders over $140</span>
      </div>
      <div className="flex flex-col justify-center items-center h-36 ">
        <div className="rounded-full bg-slate-500 w-16 h-16 flex flex-row justify-center items-center ">
          <div className="bg-black rounded-full flex flex-row justify-center text-center items-center w-12 h-12 p-1">
            <Image src={delivery} alt="delivery" width={150} height={150} />
          </div>
        </div>
        <h2 className="text-2xl mt-4 font-semibold text-black">
          FREE AND FAST DELIVERY
        </h2>
        <span>Free delivery for all orders over $140</span>
      </div>{" "}
      <div></div>
    </div>
  );
};

export default BeforeFooter;
