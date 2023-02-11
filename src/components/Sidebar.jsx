import React from "react";
import { FaBars } from "react-icons/fa";
import SideNav from "./short/SideNav";

const Sidebar = () => {
  return (
    <div className=" bg-green-800 h-14 pt-1 bg-green">
      <div className="container mx-auto flex justify-between my-2">
        <div className="flex gap-2">
          <SideNav/>
          <FaBars className="mt-1 text-xl cursor-pointer" />
          <h4 className="font-bold text-xl">Ready To Ship</h4>
        </div>
        <div>
          <h4 className="font-semi-bold">Get the App English-USD</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
