import React from "react";
import LogoCard from "./short/LogoCard";

const logos = [
  { src: "/headphone.svg", alt: "", title: "Headphone" },
  { src: "/laptop.svg", alt: "", title: "Laptop" },
  { src: "/mobile.svg", alt: "", title: "Mobile" },
  { src: "/monitor.svg", alt: "", title: "Monitor" },
  { src: "/ram.svg", alt: "", title: "Ram" },
  { src: "/gpu.svg", alt: "", title: "Gpu" },
  { src: "/processor.svg", alt: "", title: "Processor" },
  { src: "/camera.svg", alt: "", title: "Camera" },
  { src: "/mouse.svg", alt: "", title: "Mouse" },
];

const LogoSlider = () => {
  const logoCards = Array.from({ length: 1 }).flatMap(() =>
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
