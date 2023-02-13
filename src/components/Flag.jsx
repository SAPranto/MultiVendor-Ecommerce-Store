import React from "react";
import FlagCard from "./short/FlagCard";
const Flag = () => {
  return (
    <>
    <div className="container flex mx-auto gap-4 mt-4">
      <FlagCard src="/Flag.svg" title="Bangladesh" />
      <FlagCard src="/Flag.svg" title="Bangladesh" />
      <FlagCard src="/Flag.svg" title="Bangladesh" />
      <FlagCard src="/Flag.svg" title="Bangladesh" />
      <FlagCard src="/Flag.svg" title="Bangladesh" />
    </div>
    <div className="mt-6 mb-2">
        <img src="footer-banner.webp" alt="" />
    </div>
    </>
  );
};

export default Flag;
