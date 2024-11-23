// src/components/PortfolioBuilder/LayoutSelector/layouts/TimelineStyle.tsx
import React, { useState } from "react";

const TimelineStyle: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const timelineItems = [
    { id: 1, year: "2023", title: "Joined ABC Corp", description: "Worked on cutting-edge technologies." },
    { id: 2, year: "2021", title: "Graduated", description: "Bachelor's in Computer Science." },
    { id: 3, year: "2019", title: "Internship", description: "Completed internship at XYZ Inc." },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Timeline</h1>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 h-full w-1"></div>
        {timelineItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center ${item.id % 2 === 0 ? "justify-start" : "justify-end"} mb-8`}
          >
            <div
              className={`bg-white p-4 shadow rounded-lg w-3/4 cursor-pointer transition-transform duration-300 ${
                selectedItem === item.id ? "scale-105 bg-blue-50" : ""
              }`}
              onClick={() => setSelectedItem(item.id === selectedItem ? null : item.id)}
            >
              <h2 className="font-bold text-lg">{item.year}</h2>
              <h3 className="mt-2">{item.title}</h3>
              {selectedItem === item.id && <p className="mt-2 text-sm text-gray-600">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineStyle;
