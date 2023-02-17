import React from "react";
import { Link } from "react-router-dom";

const LogoCard = ({ src, alt, title }) => {
  return (
    <div className="bg-white w-full h-32 rounded-xl shadow-lg pt-2 hover:-translate-y-2 transition-all hover:border-b-2 hover:border-b-gray-900 cursor-pointer">
      <Link to="/category">
      <img src={src} alt={alt} className="logo-img" />
      <h3 className="text-black text-center font-semibold">{title}</h3>
    </Link>
    </div>
  );
};

export default LogoCard;
