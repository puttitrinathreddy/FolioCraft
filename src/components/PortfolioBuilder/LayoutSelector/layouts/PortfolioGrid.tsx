// src/components/PortfolioBuilder/LayoutSelector/layouts/PortfolioGrid.tsx
import React from "react";

const PortfolioGrid: React.FC = () => {
  const projects = Array.from({ length: 6 }, (_, i) => `Project ${i + 1}`);
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Portfolio Grid</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow rounded-lg text-center"
          >
            {project}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
