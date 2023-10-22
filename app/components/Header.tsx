import Image from "next/image";
import React from "react";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <div className="px-24">
      <nav className="bg-gray-50 ">
        <div className="max-w-screen-xl  py-3 mx-auto flex flex-row justify-between">
          <div className="text-black text-2xl font-semibold">Moro</div>
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" text-gray-900 hover:underline">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900  hover:underline">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900  hover:underline">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Searchbar />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
