import React from "react";
import SideNav from "./short/SideNav";

const Sidebar = () => {
  return (
    <div className=" bg-gray-900 h-14 pt-1 bg-green max-[767.98px]:hidden sticky top-0 z-30">
      <div className="container mx-auto flex justify-between my-2">
        <div className="flex gap-2">
          <SideNav/>
          <h4 className="font-bold text-xl">Buy Your Dream Desktop</h4>
        </div>
        <div>
          <h4 className="font-semibold">Delivery All Over Bangladesh</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
