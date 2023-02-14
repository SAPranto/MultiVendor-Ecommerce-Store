import React from "react";
import { Link } from "react-router-dom";

const EmiCard = ({title, subTitle, qty}) => {
  return (
    <div className="text-black mt-3 border shadow-lg rounded-lg px-2 pt-2 pb-2 w-44">
      <h4 className="text-black text-lg font-bold">{title}</h4>
      <p className="text-black font-semibold">
        {subTitle}
      </p>
      <div>
      <Link to="#" className="text-cyan-800 font-semibold">{qty}</Link>
      </div>
    </div>
  );
};

export default EmiCard;
