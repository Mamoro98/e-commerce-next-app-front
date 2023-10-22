import React from "react";

const Searchbar = () => {
  return (
    <div>
      <form>
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full  text-sm
               text-gray-900 bg-gray-200 
               border-none rounded-sm
               "
              placeholder="Search ..."
              required
            />
            <button
              type="submit"
              className="
              absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-black 
                 bg-gray-200 "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
