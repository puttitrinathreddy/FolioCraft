import React from 'react';
import { motion } from 'framer-motion';

interface GallerySectionProps {
  images: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  return (
    <motion.div
      className="p-8 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-2xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="rounded-lg shadow hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default GallerySection;
