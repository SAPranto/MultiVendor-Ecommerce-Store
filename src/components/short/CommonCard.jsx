import React from "react";

const CommonCard = (props) => {
  return (
    <div className="container mx-auto">
      <div className="max-w-60 bg-white pb-4 hover:-translate-y-2 transform transition-all duration-500 cursor-pointer">
        <div className="">
          <img
            src={props.imgSrc}
            alt={props.imgAlt}
            className=" max-h-[14rem] w-60 p-2 object-cover"
          />
        </div>
        <div className="flex flex-col px-2 gap-1">
          <h5 className="text-black text-xl font-bold">{props.productName}</h5>
          <h6 className="text-green-800 font-bold text-2xl">৳{props.price}</h6>
          <div className="">
            <button
              type="button"
              className="text-white bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg sm:text-xl px-4 py-1 inline-flex justify-center w-full text-center hover:bg-red-500 transition duration-300 ease-in-out transform"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
