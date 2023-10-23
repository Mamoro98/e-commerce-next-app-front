import React from "react";

interface Props {
  tagname: string;
}

const HeadTag = ({ tagname }: Props) => {
  return (
    <div className="flex flex-row items-center w-[15em] ">
      <div className="bg-red-500 h-12 w-3 rounded-sm "></div>
      <p className="text-red-500 font-semibold ml-4 ">{tagname}</p>
    </div>
  );
};

export default HeadTag;
