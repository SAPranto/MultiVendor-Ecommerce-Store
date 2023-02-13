import React from "react";

const TradeCard = ({ src, title }) => {
  return (
    <div className="max-[768px]:w-1/2 px-2 mb-4 sm:container mx-auto">
      <div className="bg-white hover:-translate-y-2 transform transition-all duration-500 cursor-pointer">
        <img src={src} alt="" className="w-full h-64 object-fill" />
        <div className="px-4 py-4">
          <h5 className="text-black text-xl mt-2 mb-4">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default TradeCard;