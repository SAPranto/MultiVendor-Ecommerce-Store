import React from "react";

const FlagCard = ({ src, title }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row bg-white sm:gap-5 p-2 w-22 sm:w-full hover:-translate-y-2 transform transition-all duration-500 cursor-pointer">
        <img src={src} alt="" className="flag-card" />
        <h5 className="text-blue-600 pt-4 text-sm sm:text-base">{title}</h5>
      </div>
    </div>
  );
};

export default FlagCard;
