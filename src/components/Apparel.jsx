import React from "react";
import "./short/CSS/Apparel.css";

const Apparel = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center text-xl font-bold">
        <h4 className="text-black border-b-2">APPAREL</h4>
      </div>
      <div className="flex">
        <div className="-mt-16">
          <h5 className="relative top-40 left-10 text-3xl font-bold text-black">
            Shopping
            <br />
            Guide For <br />
            Trending <br /> Fashion
          </h5>
          <img src="/tshirt1.png" alt="" className="Apparel-img" />
          <button className="text-black border bg-white px-6 py-1 relative bottom-14 left-4">
            Shop Now
          </button>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Apparel;
