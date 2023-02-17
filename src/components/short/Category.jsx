import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  return (
    <div className="bg-gray-900 h-[23.5rem] pt-3 mx-3 w-64 ml-[0px] max-xl:hidden">
      <ul className="px-6 flex flex-col gap-2 text-lg font-semibold cursor-pointer">
        <li className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">
          <Link to>Fashions</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">Headphones</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">Laptops</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">Keyboards</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">Mouse</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">Laptop</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">Camera</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="hover:text-sky-300 hover:translate-x-2 hover:border-l-4 border-sky-300 pl-2 hover:rounded transition ease-in-out">Processor</Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
