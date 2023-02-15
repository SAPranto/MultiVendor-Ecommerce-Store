import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductNav = () => {
  return (
    <div className="bg-green-900 h-full w-80 pb-24 pt-3 mx-3 max-w-80 max-md:hidden">
      <ul className="px-6 flex flex-col gap-2 xl:text-xl font-semibold cursor-pointer">
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-orange-500 hover:translate-x-2 hover:border-l-4 border-orange-500 pl-2 hover:rounded transition ease-in-out">Electronics</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-orange-500 hover:translate-x-2 hover:border-l-4 border-orange-500 pl-2 hover:rounded transition ease-in-out">Electronics</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-orange-500 hover:translate-x-2 hover:border-l-4 border-orange-500 pl-2 hover:rounded transition ease-in-out">Sports</Link>
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-orange-500 hover:translate-x-2 hover:border-l-4 border-orange-500 pl-2 hover:rounded transition ease-in-out">Home Apperal</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-orange-500 hover:translate-x-2 hover:border-l-4 border-orange-500 pl-2 hover:rounded transition ease-in-out">Accessories</Link>
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-orange-500 hover:translate-x-2 hover:border-l-4 border-orange-500 pl-2 hover:rounded transition ease-in-out">Home & Garden</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-orange-500 hover:translate-x-2 hover:border-l-4 border-orange-500 pl-2 hover:rounded transition ease-in-out">Beauty & Personal</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-orange-500 hover:translate-x-2 hover:border-l-4 border-orange-500 pl-2 hover:rounded transition ease-in-out">Tools & Hardware</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-orange-500 hover:translate-x-2 hover:border-l-4 border-orange-500 pl-2 hover:rounded transition ease-in-out">Baby categorys</Link>
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-orange-500 hover:translate-x-2 hover:border-l-4 border-orange-500 pl-2 hover:rounded transition ease-in-out">Google & Sunglasses</Link>
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-orange-500 hover:translate-x-2 hover:border-l-4 border-orange-500 pl-2 hover:rounded transition ease-in-out">Food Items</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
      </ul>
    </div>
  );
};

export default ProductNav;
