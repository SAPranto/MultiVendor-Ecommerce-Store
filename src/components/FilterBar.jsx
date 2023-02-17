import React from "react";
import { AiFillStar } from "react-icons/ai";
import PriceRangeInput from "./short/PriceRangeInput";

const FilterBar = () => {
  return (
    <div className="mb-2 max-[767.98px]:w-40">
      <div className="bg-green-900 pb-4 md:max-w-xs rounded-lg px-4 shadow-xl container flex flex-col ml-5 pt-4">
        <h5 className="sm:text-2xl text-xl font-bold">Brands</h5>
        <div className="pl-4 sm:text-xl text-lg font-semibold flex flex-col gap-1 mt-3">
          <p>Garnier</p>
          <p>Nestle</p>
          <p>Samsung</p>
          <p>Samsung</p>
          <p>Samsung</p>
          <p>Samsung</p>
          <p>Samsung</p>
          <p>Samsung</p>
          <p>Samsung</p>
        </div>
      </div>
      <div className="bg-green-900 pb-4 max-w-xs rounded px-4 shadow container flex flex-col mt-5 ml-5 pt-4 ">
        <div className="flex flex-col gap-2">
          <h5 className="sm:text-2xl text-xl font-bold">Price Range</h5>
          <PriceRangeInput />
        </div>
        <div></div>
      </div>
      <div className="bg-green-900 pb-2 gap-2 max-w-xs rounded px-4 shadow container flex flex-col mt-5 ml-5 pt-4 ">
        <h5 className="sm:text-2xl text-xl font-bold mb-2">Rating</h5>
        <div className="flex gap-2 sm:text-2xl text-lg">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="flex gap-2 sm:text-2xl text-lg">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="flex gap-2 sm:text-2xl text-lg">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="flex gap-2 sm:text-2xl text-lg">
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="flex gap-2 sm:text-2xl text-lg">
          <AiFillStar />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
