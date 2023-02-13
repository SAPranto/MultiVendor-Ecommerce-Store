import React from "react";

const ZoomImg = () => {
  return (
    <div className="bg-white my-8 py-8">
    <div className="container mx-auto">
        <div className="flex justify-between">
        <img src="/imgbanner.png" alt="" className="zoom-img cursor-pointer hover:scale-110 ease-in duration-500"/>
        <img src="/imgbanner.png" alt="" className="zoom-img cursor-pointer hover:scale-110 ease-in duration-500"/>
        <img src="/imgbanner.png" alt="" className="zoom-img cursor-pointer hover:scale-110 ease-in duration-500"/>
      </div>
    </div>
    </div>
  );
};

export default ZoomImg;
