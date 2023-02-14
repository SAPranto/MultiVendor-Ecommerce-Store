import React from "react";

const LogoCard = ({ src, alt, title }) => {
  return (
    <div className="bg-white w-full h-32 rounded-xl shadow-lg pt-2 hover:-translate-y-2 transition-all hover:border-b-2 hover:border-b-blue-900 cursor-pointer">
      <img src={src} alt={alt} className="logo-img" />
      <h3 className="text-black text-center font-semibold">{title}</h3>
    </div>
  );
};

export default LogoCard;
