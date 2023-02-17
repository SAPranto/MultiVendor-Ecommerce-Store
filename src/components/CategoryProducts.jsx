import React from "react";

const CategoryProducts = ({src, title, price, rating}) => {
  return (
    <div className=" px-2 mb-4">
      <div className="bg-white hover:-translate-y-2 transform transition-all duration-500 cursor-pointer rounded shadow">
        <img src={src} alt="" className="" />
        <div className="px-4 py-4 flex flex-col gap-2">

          <h5 className="text-black font-bold text-xl">{title}</h5>
          <span className="flex gap-4">
            <h6 className="text-green-500">BDT: ৳{price}</h6>
            <p className="text-black">({rating} Rating)</p>
          </span>
          <div className="flex justify-between gap-4">
            <button className="bg-red-700 w-24 pt-2 pb-2 text-sm font-bold rounded hover:bg-red-500 transition duration-300 ease-in-out transform">Buy Now</button>
            <button className="bg-blue-700 w-20 text-xs font-bold rounded hover:bg-red-500 transition duration-300 ease-in-out transform">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
