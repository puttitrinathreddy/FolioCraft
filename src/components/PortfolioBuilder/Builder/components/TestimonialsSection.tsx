

import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  { id: 1, quote: "This service is amazing!", author: "Jane Doe" },
  { id: 2, quote: "Highly recommend to everyone.", author: "John Smith" },
  { id: 3, quote: "Exceptional quality and support.", author: "Alice Johnson" },
];

const TestimonialsSection: React.FC = () => {
  return (
    <motion.div
      className="p-8 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-2xl font-bold mb-6">Testimonials</h1>
      <div className="space-y-4">
        {testimonials.map(({ id, quote, author }) => (
          <div key={id} className="bg-white p-4 shadow rounded-lg">
            <p className="italic">"{quote}"</p>
            <p className="mt-2 text-right text-sm font-semibold">{author}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;
