import React from "react";
import TradeCard from "./short/TradeCard";
const TradeService = () => {
  return (
    <div className="flex max-[767.98px]:flex-wrap container mx-auto">
      <TradeCard src="/img4.jpg" title="Best Global Fashion Brand" />
      <TradeCard src="/img3.jpg" title="Best Global Fashion Brand" />
      <TradeCard src="/img4.jpg" title="Best Global Fashion Brand" />
      <TradeCard src="/img3.jpg" title="Best Global Fashion Brand" />
    </div>
  );
};

export default TradeService;
