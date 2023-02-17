import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductNav = () => {
  return (
    <div className="bg-gray-700 h-full w-80 pb-24 pt-3 mx-3 max-w-80 max-md:hidden">
      <ul className="px-6 flex flex-col gap-2 lg:text-xl font-semibold cursor-pointer">
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">Headphones</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">Mobiles</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">Keyboards</Link>
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">GPU</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">CPU</Link>
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">Mouse</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">Motherboard</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">WebCam</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">Monitor</Link>
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">DSLR Camera</Link>
        </li>
        <li className="flex justify-between">
          <Link to="/category" className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">RAM</Link>
          <IoMdArrowDropright className="text-2xl" />
        </li>
      </ul>
    </div>
  );
};

export default ProductNav;
