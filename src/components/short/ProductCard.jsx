import React from "react";
import "./CSS/ProductCard.css";

const ProductCard = ({ src, title, discountPrice, price }) => {
  return (
    <>
      <div className="bg-white hover:-translate-y-2 transform transition-all duration-500 cursor-pointer">
        <div className="">
          <img src={src} alt="" className=" max-h-[19rem] max-w-60 p-2 " />
        </div>
        <div className="flex flex-col px-2 pb-4">
          <h5 className="text-black text-lg font-bold">{title}</h5>
          <h6 className="text-gray-300 line-through">৳{discountPrice}</h6>
          <h6 className="text-black font-bold text-xl">৳{price}</h6>
        </div>
      </div>
    </>
  );
};

export default ProductCard;