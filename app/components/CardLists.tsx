import React from "react";
import Card from "./Card";

const CardLists = () => {
  return (
    <div className="grid grid-cols-3 gap-4 ml-6 pt-12 pb-12">
      <div className="col-span-1 ">
        <Card />
      </div>
      <div className="col-span-1 ">
        <Card />
      </div>
      <div className="col-span-1 ">
        <Card />
      </div>
      <div className="col-span-1 ">
        <Card />
      </div>
      <div className="col-span-1 ">
        <Card />
      </div>
      <div className="col-span-1 ">
        <Card />
      </div>
      <div className="col-span-1 ">
        <Card />
      </div>
      <div className="col-span-1 ">
        <Card />
      </div>
      <div className="col-span-1 ">
        <Card />
      </div>
    </div>
  );
};

export default CardLists;
