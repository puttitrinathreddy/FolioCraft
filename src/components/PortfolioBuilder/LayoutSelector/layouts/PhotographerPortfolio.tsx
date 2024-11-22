// src/components/PortfolioBuilder/LayoutSelector/layouts/PhotographerPortfolio.tsx
import React from "react";

const PhotographerPortfolio: React.FC = () => {
  return (
    <div>
      <header className="h-64 bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Photographer Name</h1>
      </header>
      <div className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 rounded-lg p-4">Landscape Photography</div>
          <div className="bg-gray-200 rounded-lg p-4">Portrait Photography</div>
          <div className="bg-gray-200 rounded-lg p-4">Event Photography</div>
          <div className="bg-gray-200 rounded-lg p-4">Product Photography</div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerPortfolio;
