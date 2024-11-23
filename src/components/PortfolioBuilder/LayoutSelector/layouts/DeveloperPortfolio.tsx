// src/components/PortfolioBuilder/LayoutSelector/layouts/DeveloperPortfolio.tsx
import React from "react";

const DeveloperPortfolio: React.FC = () => {
  return (
    <div className="flex h-full">
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold">Navigation</h2>
        <ul className="mt-4 space-y-2">
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </aside>
      <main className="w-3/4 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 shadow rounded-lg">Project 1</div>
          <div className="bg-white p-4 shadow rounded-lg">Project 2</div>
          <div className="bg-white p-4 shadow rounded-lg">Project 3</div>
          <div className="bg-white p-4 shadow rounded-lg">Project 4</div>
        </div>
      </main>
    </div>
  );
};

export default DeveloperPortfolio;
