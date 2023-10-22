import Image from "next/image";
import React from "react";
import messi from "../../public/messi.jpg";
const Card = () => {
  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
            className="p-8 rounded-t-lg"
            src={messi}
            alt="product image"
            width={400}
            height={250}
          />
        </a>
        <div className="px-5 pb-5 flex justify-between items-center">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch
            </h5>
          </a>

          <div className="flex items-center justify-end ">
            <span className="text-sm font-light text-gray-900 dark:text-white font-mono">
              $599
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
