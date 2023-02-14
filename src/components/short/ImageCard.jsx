import React from "react";

const ImageCard = ({ src }) => {
  return (
    <div className="bg-white w-full shadow-lg rounded-lg px-4 py-6 cursor-pointer hover:-translate-y-2 transform transition-all duration-500">
      <img src={src} alt="" />
    </div>
  );
};

export default ImageCard;
