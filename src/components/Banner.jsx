import React from "react";
import ProductNav from "./short/ProductNav";

const Banner = () => {
  return (
    <div className="container mx-auto flex my-1">
      <ProductNav />

      <div className=" sm:w-full my-1">
        <img src="/banner.webp" alt="" className="md:h-[490px] h-[200px] md:w-full w-[60rem] object-cover" />
      </div>
    </div>
  );
};

export default Banner;
