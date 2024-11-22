// src/components/PortfolioBuilder/LayoutSelector/layouts/ModernSidebar.tsx
import React from "react";

const ModernSidebar: React.FC = () => {
  return (
    <div className="flex h-full">
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold">Sidebar</h2>
        <ul className="mt-4 space-y-2">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </aside>
      <main className="w-3/4 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold">Content Area</h1>
        <p className="mt-4">This is where the main content will go.</p>
      </main>
    </div>
  );
};

export default ModernSidebar;
