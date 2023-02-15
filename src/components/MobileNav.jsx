import React from "react";
import { FaBars } from "react-icons/fa";
import { BsFillBasket2Fill } from "react-icons/bs";
const MobileNav = () => {
  return (
    <div className="bg-green-900 min-[768px]:hidden sticky top-0 z-30 px-4">
      <div className="container mx-auto py-2 flex justify-between">
        <div>
          <FaBars className="cursor-pointer mt-2 text-3xl" />
        </div>
        <div>
          <img src="/logo.png" alt="" width="150px" />
        </div>
        <div className="flex gap-3 mt-2">
          <BsFillBasket2Fill className="text-3xl" />
          <h6 className="bg-white text-black font-bold px-1 rounded h-[18px] mt-1 ml-1">
            0
          </h6>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
