import React from "react";
import { FaBars } from "react-icons/fa";
import { BsFillBasket2Fill } from "react-icons/bs";
const MobileNav = () => {
  return (
    <div className="bg-gray-900 min-[768px]:hidden sticky top-0 z-30 px-2">
      <div className="container mx-auto py-2 flex justify-between">
        <div>
          <FaBars className="cursor-pointer mt-2 text-3xl" />
        </div>
        <div>
          <img src="/logo.png" alt="" width="150px" />
        </div>
        <div className="flex gap-1 mt-1">
          <BsFillBasket2Fill className="text-3xl mt-1" />
          <h6 className="bg-white text-black font-bold px-1 rounded text-sm h-[14px]">
            0
          </h6>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
