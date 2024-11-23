// src/components/PortfolioBuilder/LayoutSelector/layouts/SplitLayout.tsx
import React from "react";

const SplitLayout: React.FC = () => {
  return (
    <div className="flex h-full">
      <div className="w-1/2 bg-gray-800 text-white p-8">
        <h1 className="text-2xl font-bold">Left Section</h1>
      </div>
      <div className="w-1/2 bg-gray-100 p-8">
        <h2 className="text-2xl font-bold">Right Section</h2>
      </div>
    </div>
  );
};

export default SplitLayout;
