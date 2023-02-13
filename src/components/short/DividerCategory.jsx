import React from "react";

const DividerCategory = ({title}) => {
  return (
    <>
    <div className="container mx-auto flex justify-between mt-4">
      <div className="">
        <h5 className="text-black text-2xl font-bold border-b-4 border-b-green-900">{title}</h5>
      </div>
      <div>
        <button className="bg-green-500 px-6 py-1 rounded hover:bg-green-800 transition duration-300 ease-in-out transform">See More</button>
        </div>
        
      </div>
      <div className="border-b-2 border-b-slate-300 mt-1 container mx-auto"></div>
    </>
  );
};

export default DividerCategory;
