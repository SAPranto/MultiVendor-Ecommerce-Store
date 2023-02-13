import React from "react";
import ProductCard from "./short/ProductCard";

const ProductBanner = () => {
  return (
    <div className="container mx-auto flex gap-4">
      <ProductCard
        src="/product.webp"
        title="Blue t-shirt"
        discountPrice="520"
        price="450"
      />
      <ProductCard
        src="/product.webp"
        title="Blue t-shirt"
        discountPrice="520"
        price="450"
      />
      <ProductCard
        src="/product.webp"
        title="Blue t-shirt"
        discountPrice="520"
        price="450"
      />
      <ProductCard
        src="/product.webp"
        title="Blue t-shirt"
        discountPrice="520"
        price="450"
      />
      <ProductCard
        src="/product.webp"
        title="Blue t-shirt"
        discountPrice="520"
        price="450"
      />
    </div>
  );
};

export default ProductBanner;
