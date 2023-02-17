import React from "react";
import { AiFillHome, AiOutlineLogin } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";

const MobileFooter = () => {
  return (
    <div className="bg-gray-900 h-20 flex gap-2 px-6 justify-center sticky bottom-0 z-30 visible md:hidden">
      <div className=" bg-gray-800 w-60 rounded my-2 py-1">
        <span className="flex justify-center">
          <AiFillHome size={24} className="" />
        </span>
        <h6 className="text-center">Home</h6>
      </div>
      <div className=" bg-gray-800 w-60 rounded my-2 py-1">
        <span className="flex justify-center">
          <BsFillCartFill size={24} className="" />
        </span>
        <h6 className="text-center">Cart</h6>
      </div>
      <div className=" bg-gray-800 w-60 rounded my-2 py-1">
        <span className="flex justify-center">
          <FaUserPlus size={24} className="" />
        </span>
        <h6 className="text-center">Registration</h6>
      </div>
      <div className=" bg-green-800 w-60 rounded my-2 py-1">
        <span className="flex justify-center">
          <AiOutlineLogin size={24} className="" />
        </span>
        <h6 className="text-center">Login</h6>
      </div>
    </div>
  );
};

export default MobileFooter;
