import React from "react";
import LogoCard from "./short/LogoCard";

const logos = [
  { src: "/img.svg", alt: "", title: "Fashions" },
  { src: "/img.png", alt: "", title: "Fashions" },
];

const LogoSlider = () => {
  const logoCards = Array.from({ length: 4 }).flatMap(() =>
    logos.map((logo, index) => (
      <LogoCard key={index} src={logo.src} alt={logo.alt} title={logo.title} />
    ))
  );

  return (
    <div className="container mx-auto sm:flex sm:justify-between gap-3 my-4 grid grid-cols-4">
      {logoCards}
    </div>
  );
};

export default LogoSlider;
