// src/components/PortfolioBuilder/Builder/PreviewModal.tsx
import React, { Component,ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from 'react-grid-layout';



interface PreviewComponent {
    id: string;
    content: ReactNode;
    style: React.CSSProperties;
  }
  
  interface PreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    layout: Record<string, Layout>;
    components: PreviewComponent[];
  }

export const PreviewModal: React.FC<PreviewModalProps> = ({ 
  isOpen, 
  onClose, 
  layout, 
  components 
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container mx-auto h-screen overflow-auto bg-white p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Preview</h2>
            <button 
              onClick={onClose}
              className="bg-gray-200 p-2 rounded-full"
            >
              Close
            </button>
          </div>
          <div className="preview-container">
            {components.map((comp) => (
              <div 
                key={comp.id}
                style={{
                  ...comp.style,
                  position: 'relative',
                  ...layout[comp.id]
                }}
              >
                {comp.content}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
