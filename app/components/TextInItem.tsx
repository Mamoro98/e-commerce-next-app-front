import React from "react";
interface Props {
  headtext: string;
  desc: string;
  buttontext: string;
  classes: string;
}
const TextInItem = ({ headtext, desc, buttontext, classes }: Props) => {
  return (
    <div className={classes}>
      <h1 className="text-2xl text-white font-semibold">{headtext}</h1>
      <span className="text-white text-sm font-light w-64 mt-2">{desc}</span>
      <button className="w-fit mt-2 border-b-2 cursor-pointer">
        {buttontext}
      </button>
    </div>
  );
};

export default TextInItem;
