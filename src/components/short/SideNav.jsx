import React, { useState } from "react";
import { BiExit, BiRightArrow } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const SideNav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
    {!isOpen ? (<GiHamburgerMenu className="text-3xl cursor-pointer" onClick={() => setOpen(!isOpen)}/>) : 
    
    (
      
      <div className="top-0 left-0 fixed bg-black text-white w-[18vw] h-full p-10 z-10">
      <div className="flex justify-betwen gap-2 cursor-pointer">
        <img src="/logo.png" alt="" />
        <span className="text-3xl">
          <BiExit className="mt-1" onClick={() => setOpen(!isOpen)}/>
        </span>
      </div>
      <div className="my-4 flex justify-center">
        <img src="/girl.jpg" alt="" className="rounded-full w-20" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between cursor-pointer">
          <h5 className="">Fashions</h5>
          <BiRightArrow className="mt-1" />
        </div>
        <div className="flex justify-between cursor-pointer">
          <h5 className="">Fashions</h5>
          <BiRightArrow className="mt-1" />
        </div>
        <div className="flex justify-between cursor-pointer">
          <h5 className="">Fashions</h5>
          <BiRightArrow className="mt-1" />
        </div>
        <div className="flex justify-between cursor-pointer">
          <h5 className="">Fashions</h5>
          <BiRightArrow className="mt-1" />
        </div>
        <div className="flex justify-between cursor-pointer">
          <h5 className="">Fashions</h5>
          <BiRightArrow className="mt-1" />
        </div>
        <div className="flex justify-between cursor-pointer">
          <h5 className="">Fashions</h5>
          <BiRightArrow className="mt-1" />
        </div>
      </div>

      <div className="mt-8">
        <h6 className="text-xs font-bold">
          About us | Contact us | Terms And Conditions
        </h6>
      </div>
    </div>
    )
  }
    </>
  );
};

export default SideNav;
