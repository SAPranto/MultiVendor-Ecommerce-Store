import React from "react";
import LogoCard from "./short/LogoCard";

const LogoSlider = () => {
  return (
    <div className="container mx-auto sm:flex gap-3 my-4 grid grid-cols-4">
      <LogoCard src="/img.svg" alt="" title="Fashions" />
      <LogoCard src="/img.png" alt="" title="Fashions" />
      <LogoCard src="/img.svg" alt="" title="Fashions" />
      <LogoCard src="/img.png" alt="" title="Fashions" />
      <LogoCard src="/img.svg" alt="" title="Fashions" />
      <LogoCard src="/img.png" alt="" title="Fashions" />
      <LogoCard src="/img.svg" alt="" title="Fashions" />
      <LogoCard src="/img.png" alt="" title="Fashions" />
    </div>
  );
};

export default LogoSlider;
