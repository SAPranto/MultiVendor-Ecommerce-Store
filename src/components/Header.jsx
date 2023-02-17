import React from "react";
import "./short/CSS/Header.css";
import SearchBar from "./short/SearchBar.jsx";
import { FaUserPlus } from "react-icons/fa";
import { BsBoxArrowInRight, BsFillBasket2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" bg-gray-800 h-20 pt-5 max-[767.98px]:hidden">
        <div className="container flex justify-between mx-auto gap-4">
          <div>
            <Link to="/" className="cursor-pointer text-4xl font-bold">NeXoy</Link>
          </div>
          <div>
            <SearchBar></SearchBar>
          </div>

          <div className="flex gap-2 mt-1">
            <FaUserPlus className="cursor-pointer hover:scale-110 transition-all text-3xl bg-blue-500 p-1 rounded w-9 h-8 px-2" />
            <BsBoxArrowInRight className="cursor-pointer hover:scale-110 transition-all text-3xl bg-cyan-700 p-1 rounded w-9 h-8 px-2" />
            <div className="flex px-5 py-2 gap-1 hover:scale-125 transition duration-300 ease-in-out transform cursor-pointer">
              <BsFillBasket2Fill className="text-xl" />
              <h6 className="bg-white text-black font-bold px-1 rounded text-xs h-[16px] -mt-2">
                0
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
