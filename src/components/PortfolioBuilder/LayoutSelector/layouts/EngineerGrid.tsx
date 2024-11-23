// src/components/PortfolioBuilder/LayoutSelector/layouts/EngineerGrid.tsx
import React from "react";

const EngineerGrid: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Skills & Technologies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow rounded-lg text-center">React</div>
        <div className="bg-white p-4 shadow rounded-lg text-center">Node.js</div>
        <div className="bg-white p-4 shadow rounded-lg text-center">TypeScript</div>
        <div className="bg-white p-4 shadow rounded-lg text-center">MongoDB</div>
      </div>
    </div>
  );
};

export default EngineerGrid;
