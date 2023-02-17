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
      <div className="flex justify-end gap-2 cursor-pointer">
        <span className="text-3xl">
          <BiExit onClick={() => setOpen(!isOpen) } className="mt-1"/>
        </span>
      </div>
      <div className="my-4 flex justify-center">
        <img src="/logo.webp" alt="" className="rounded-full w-20" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between cursor-pointer">
          <h5 className="">Products</h5>
          <BiRightArrow className="mt-1" />
        </div>
        <div className="flex justify-between cursor-pointer">
          <h5 className="">Products</h5>
          <BiRightArrow className="mt-1" />
        </div>
        <div className="flex justify-between cursor-pointer">
          <h5 className="">Products</h5>
          <BiRightArrow className="mt-1" />
        </div>
        <div className="flex justify-between cursor-pointer">
          <h5 className="">Products</h5>
          <BiRightArrow className="mt-1" />
        </div>
        <div className="flex justify-between cursor-pointer">
          <h5 className="">Products</h5>
          <BiRightArrow className="mt-1" />
        </div>
        <div className="flex justify-between cursor-pointer">
          <h5 className="">Products</h5>
          <BiRightArrow className="mt-1" />
        </div>
      </div>

      <div className="mt-8">
        <h6 className="md:text-xl font-bold flex justify-center">
          About us | Contact us
        </h6>
      </div>
    </div>
    )
  }
    </>
  );
};

export default SideNav;
