import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  return (
    <div className="bg-green-900 h-auto pb-10 pt-3 mx-3 w-64 ml-[0px] max-xl:hidden">
      <ul className="px-6 flex flex-col gap-2 text-lg font-semibold cursor-pointer">
        <li className="flex justify-between" me="flex justify-between">
          <Link to>Fashions</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="">Electronics</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="">Sports</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="">Home Apperal</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="">Accessories</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="">Home & Garden</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="">Beauty & Personal</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="">Tools & Hardware</Link>
        </li>
        <li className="flex justify-between">
          <Link to className="">Baby Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
