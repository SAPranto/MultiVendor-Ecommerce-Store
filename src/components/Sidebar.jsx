import React from "react";
import SideNav from "./short/SideNav";

const Sidebar = () => {
  return (
    <div className=" bg-green-800 h-12 pt-1 bg-green max-[767.98px]:hidden sticky top-0 z-30">
      <div className="container mx-auto flex justify-between my-1">
        <div className="flex gap-2">
          <SideNav/>
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
