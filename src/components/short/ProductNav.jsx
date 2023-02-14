import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductNav = () => {
  return (
    <div className="bg-green-900 h-full w-80 pb-24 pt-3 mx-3 max-w-80 max-md:hidden">
      <ul className="px-10 flex flex-col gap-2 text-lg font-semibold cursor-pointer">
        <li className="flex justify-between">
          <Link to="/category">Electronics</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category">Electronics</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category">Sports</Link>
        </li>
        <li className="flex justify-between">
          <Link to="/category">Home Apperal</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category">Accessories</Link>
        </li>
        <li className="flex justify-between">
          <Link to="/category">Home & Garden</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category">Beauty & Personal</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category">Tools & Hardware</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category">Baby categorys</Link>
        </li>
        <li className="flex justify-between">
          <Link to="/category">Google & Sunglasses</Link>
        </li>
        <li className="flex justify-between">
          <Link to="/category">Food Items</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
      </ul>
    </div>
  );
};

export default ProductNav;
