// src/components/PortfolioBuilder/LayoutSelector/layouts/ArtistGallery.tsx
import React from "react";

const ArtistGallery: React.FC = () => {
  const images = Array.from({ length: 8 }, (_, i) => `https://via.placeholder.com/150?text=Art+${i + 1}`);

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Art Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Art ${index + 1}`}
            className="rounded-lg shadow hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistGallery;
