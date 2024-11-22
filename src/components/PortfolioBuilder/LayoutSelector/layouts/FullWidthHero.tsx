// src/components/PortfolioBuilder/LayoutSelector/layouts/FullWidthHero.tsx
import React from "react";

const FullWidthHero: React.FC = () => {
  return (
    <div>
      <div className="h-64 bg-gray-800 text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Hero Section</h1>
      </div>
      <div className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold">Content Below</h2>
      </div>
    </div>
  );
};

export default FullWidthHero;
