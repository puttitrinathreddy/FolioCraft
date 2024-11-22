// src/components/PortfolioBuilder/LayoutSelector/layouts/InteractiveCardStyle.tsx
import React, { useState } from "react";

const InteractiveCardStyle: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCardFlip = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const cards = [
    { title: "Skill 1", front: "React", back: "Proficient in React and TypeScript." },
    { title: "Project 1", front: "E-Commerce App", back: "Built an E-commerce application." },
    { title: "Testimonial 1", front: "Feedback", back: "Great experience working with them." },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Interactive Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-white w-full h-40 shadow rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300"
            onClick={() => toggleCardFlip(index)}
          >
            <div
              className={`absolute inset-0 bg-gray-100 p-6 flex items-center justify-center transform ${
                flippedCards.includes(index) ? "rotate-y-180" : ""
              } transition-transform duration-500`}
            >
              {flippedCards.includes(index) ? (
                <p className="text-gray-600 text-sm">{card.back}</p>
              ) : (
                <h2 className="font-bold text-lg">{card.front}</h2>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveCardStyle;
