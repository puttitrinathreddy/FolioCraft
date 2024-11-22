import React from "react";
import LayoutSelector from "@/components/PortfolioBuilder/LayoutSelector/LayoutSelector";

const PortfolioBuilder: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8">
        Build Your Portfolio
      </h1>
      <LayoutSelector />
    </div>
  );
};

export default PortfolioBuilder;
