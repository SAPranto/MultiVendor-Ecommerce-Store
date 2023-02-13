import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const Category = (props) => {
  return (
    <div className="bg-green-900 h-auto pb-10 pt-3 mx-3 w-64 ml-[0px] max-xl:hidden">
      <ul className="px-6 flex flex-col gap-2 text-lg font-semibold cursor-pointer">
        <li classNa className="flex justify-between" me="flex justify-between">
          <a href="">Fashions</a>
        </li>
        <li className="flex justify-between">
          <a href="" className="">Electronics</a>
        </li>
        <li className="flex justify-between">
          <a href="" className="">Sports</a>
        </li>
        <li className="flex justify-between">
          <a href="" className="">Home Apperal</a>
        </li>
        <li className="flex justify-between">
          <a href="" className="">Accessories</a>
        </li>
        <li className="flex justify-between">
          <a href="" className="">Home & Garden</a>
        </li>
        <li className="flex justify-between">
          <a href="" className="">Beauty & Personal</a>
        </li>
        <li className="flex justify-between">
          <a href="" className="">Tools & Hardware</a>
        </li>
        <li className="flex justify-between">
          <a href="" className="">Baby Products</a>
        </li>
      </ul>
    </div>
  );
};

export default Category;
