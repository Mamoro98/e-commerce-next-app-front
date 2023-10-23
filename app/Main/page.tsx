import React from "react";
import Hero from "../components/Hero";
import FlashSales from "./FlashSales";
import BrowseCategory from "./BrowseCategory";
import BestSelling from "./BestSelling";
import EnhanceMusic from "./EnhanceMusic";
import ExploreProduct from "./ExploreProduct";
import NewArrival from "./NewArrival";
import BeforeFooter from "./BeforeFooter";

const Main = () => {
  return (
    <div className="px-24 h-[800vh] ">
      <Hero />
      <FlashSales />
      <BrowseCategory />
      <BestSelling />
      <EnhanceMusic />
      <ExploreProduct />
      <NewArrival />
      <BeforeFooter />
    </div>
  );
};

export default Main;
