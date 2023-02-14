import React from "react";
import ProductCard from "./short/ProductCard";

const products = [
  { src: "/product.webp", title: "Blue t-shirt", discountPrice: "520", price: "450" },

];

const ProductBanner = () => {
  const productCards = Array.from({ length: 5 }).flatMap(() =>
    products.map((product, index) => (
      <ProductCard
        key={index}
        src={product.src}
        title={product.title}
        discountPrice={product.discountPrice}
        price={product.price}
      />
    ))
  );

  return <div className="container mx-auto flex gap-4 justify-between">{productCards}</div>;
};

export default ProductBanner;
