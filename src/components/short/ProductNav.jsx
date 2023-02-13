import React from "react";
import { IoMdArrowDropright } from "react-icons/io"

const ProductNav = () => {
  return (
    <div className="bg-green-900 h-full w-80 pb-24 pt-3 mx-3 max-w-80 max-md:hidden">
      <ul className="px-10 flex flex-col gap-2 text-lg font-semibold cursor-pointer">
        <li className="flex justify-between ">
          <a href="/product">Fashions</a>
          <IoMdArrowDropright className="text-2xl"/>     
        </li>
        <li className="flex justify-between">
          <a href="">Electronics</a>
          <IoMdArrowDropright className="text-2xl"/>    
        </li>
        <li className="flex justify-between">
          <a href="">Sports</a> 
        </li>
        <li className="flex justify-between">
          <a href="">Home Apperal</a>
          <IoMdArrowDropright className="text-2xl"/>    
        </li>
        <li className="flex justify-between">
          <a href="">Accessories</a>
        </li>
        <li className="flex justify-between">
          <a href="">Home & Garden</a>
          <IoMdArrowDropright className="text-2xl"/>    
        </li>
        <li className="flex justify-between">
          <a href="">Beauty & Personal</a>
          <IoMdArrowDropright className="text-2xl"/>    
        </li>
        <li className="flex justify-between">
          <a href="">Tools & Hardware</a>
          <IoMdArrowDropright className="text-2xl"/>    
        </li>
        <li className="flex justify-between">
          <a href="">Baby Products</a>
        </li>
        <li className="flex justify-between">
          <a href="">Google & Sunglasses</a>
        </li>
        <li className="flex justify-between">
          <a href="">Food Items</a>
          <IoMdArrowDropright className="text-2xl"/>    
        </li>
      </ul>
    </div>
  );
};

export default ProductNav;
