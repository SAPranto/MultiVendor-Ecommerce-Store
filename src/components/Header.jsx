import React from "react";
import "./Header.css";
import SearchBar from "./short/SearchBar.jsx";
import { FaUserPlus } from "react-icons/fa";
import { BsBoxArrowInRight, BsFillBasket2Fill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className=" bg-green-900 h-20 pt-5">
        <div className="container flex justify-between mx-auto">
          <div>
            <img src="./public/logo.png" alt="" />
          </div>
          <div>
            <SearchBar></SearchBar>
          </div>

          <div>
            <div className="flex gap-2">
              <FaUserPlus className="text-3xl bg-green-500 p-1 rounded w-9 h-8 px-2"/>
              <BsBoxArrowInRight className="text-3xl bg-cyan-400 p-1 rounded w-9 h-8 px-2"/>
              <div className="flex border bg-green-800 px-5 py-1 gap-1 border-green-800">
                <BsFillBasket2Fill className="text-xl"/>
                <h5>Cart</h5>
                <h6 className="bg-white text-black font-bold px-1 rounded text-xs h-[18px] mt-1 ml-1">0</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
