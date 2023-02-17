import React from "react";
import { MdLocationOn, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
const AddCart = () => {
  return (
    <div className="text-black border shadow-lg rounded-lg p-4 w-72 md:h-full mt-10 max-md:hidden">
      <div className="">
        <h5 className="text-black text-2xl font-semibold pb-2">৳588</h5>
        <h5 className="text-cyan-600">Details</h5>
        <h5 className="text-black">
          Delivery{" "}
          <span className="text-black font-semibold">Monday, February 27</span>
        </h5>
      </div>
      <div className="flex gap-4 my-2">
        <MdLocationOn className="bg-black" />
        <h5 className="text-sm text-cyan-700">Deliver to Bangladesh</h5>
      </div>
      <div className="my-2">
        <h4 className="text-xl text-green-700">In Stock</h4>
      </div>
      <div className="flex flex-col gap-2">
        <Link to="/cart">
        <button className="bg-yellow-400 rounded-full w-full py-1 text-black text-sm shadow hover:shadow-2xl hover:bg-green-400 transition-all ease-in-out">
          Add to Cart
        </button>
        </Link>
        <Link to="/checkout">
        <button className="bg-amber-500 rounded-full w-full py-1 text-black text-sm shadow hover:shadow-2xl hover:bg-green-400 transition-all ease-in-out">
          Buy Now
        </button>
        </Link>
      </div>
      <div className="flex my-2 gap-4">
        <MdLock className="bg-black" />
        <h6 className="text-cyan-700 font-semibold text-sm">
          Secure Transaction
        </h6>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex">
          <h5 className="text-sm text-gray-400 font-semibold w-14">Colour</h5>
          <h6 className="text-sm text-black w-60">Dull Black</h6>
        </div>
        <div className="flex">
          <h5 className="text-sm text-gray-400 font-semibold w-14">Brand</h5>
          <h6 className="text-sm text-black w-60">Dull Black</h6>
        </div>
        <div className="flex">
          <h5 className="text-sm text-gray-400 font-semibold w-14">Colour</h5>
          <h6 className="text-cyan-700 text-sm font-semibold w-60">
            Eligible for Return, Refund or Replacement within 30 days of receipt
          </h6>
        </div>
        <div className="flex">
          <h5 className="text-sm text-gray-400 font-semibold w-14">Colour</h5>
          <h6 className="text-cyan-700 text-sm font-semibold w-60">Dull Black</h6>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
