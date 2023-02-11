import React from "react";
import "./CSS/ProductCard.css";

const ProductCard = () => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-60">
        <a href="#">
          <img className="rounded-t-lg p-2 product-img" src="/img1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Blue T-shirt
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ৳450
          </p>
          <p className="mb-3 font-semi-bold text-2xl text-black dark:text-gray-400">
            ৳500
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
