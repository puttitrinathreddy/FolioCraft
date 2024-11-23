// src/components/PortfolioBuilder/LayoutSelector/layouts/CorporateTestimonials.tsx
import React from "react";

const CorporateTestimonials: React.FC = () => {
  const testimonials = [
    { id: 1, quote: "Great service!", author: "CEO of XYZ Corp" },
    { id: 2, quote: "Highly recommend!", author: "CTO of ABC Inc" },
    { id: 3, quote: "Exceptional results!", author: "Manager at LMN LLC" },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Testimonials</h1>
      <div className="space-y-4">
        {testimonials.map(({ id, quote, author }) => (
          <div key={id} className="bg-white p-4 shadow rounded-lg">
            <p>"{quote}"</p>
            <p className="mt-2 text-right text-sm font-semibold">{author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorporateTestimonials;
