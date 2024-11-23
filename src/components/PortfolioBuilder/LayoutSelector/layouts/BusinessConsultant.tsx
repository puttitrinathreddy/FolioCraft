// src/components/PortfolioBuilder/LayoutSelector/layouts/BusinessConsultant.tsx
import React from "react";

const BusinessConsultant: React.FC = () => {
  return (
    <div>
      <header className="bg-blue-800 text-white p-8 text-center">
        <h1 className="text-3xl font-bold">John Doe Consulting</h1>
        <p>Helping Businesses Achieve Their Goals</p>
      </header>
      <main className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 shadow rounded-lg">Strategy Planning</div>
          <div className="bg-white p-4 shadow rounded-lg">Market Analysis</div>
          <div className="bg-white p-4 shadow rounded-lg">Financial Consulting</div>
          <div className="bg-white p-4 shadow rounded-lg">Operational Efficiency</div>
        </div>
      </main>
    </div>
  );
};

export default BusinessConsultant;
