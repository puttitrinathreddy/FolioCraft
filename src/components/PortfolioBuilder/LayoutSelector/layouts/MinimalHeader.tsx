// src/components/PortfolioBuilder/LayoutSelector/layouts/MinimalHeader.tsx
import React from "react";

const MinimalHeader: React.FC = () => {
  return (
    <div className="h-full">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">Minimal Header</h1>
      </header>
      <main className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold">Welcome</h2>
        <p className="mt-4">This is a minimal header layout.</p>
      </main>
    </div>
  );
};

export default MinimalHeader;
