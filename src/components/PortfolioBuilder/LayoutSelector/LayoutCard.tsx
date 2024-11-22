import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface LayoutCardProps {
  title: string | any;
  description: string;
  image: string;
  onSelect: () => void;
}

const LayoutCard: React.FC<LayoutCardProps> = ({
  title,
  description,
  image,
  onSelect,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={image}
        alt={title}
        className="rounded-md w-full h-40 object-cover"
      />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <Button
        onClick={onSelect}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        Select and Customize
      </Button>
    </motion.div>
  );
};

export default LayoutCard;
