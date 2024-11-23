import { useDraggable } from '@dnd-kit/core';
import { motion } from 'framer-motion';

const AVAILABLE_COMPONENTS = [
  { id: 'header', type: 'header', label: 'Header Section' },
  { id: 'about', type: 'about', label: 'About Section' },
  { id: 'skills', type: 'skills', label: 'Skills Section' },
  // Add more components as needed
];

export const ComponentLibrary = () => {
  return (
    <div className="p-4 bg-white border-r border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <div className="space-y-2">
        {AVAILABLE_COMPONENTS.map((component) => (
          <DraggableComponent key={component.id} {...component} />
        ))}
      </div>
    </div>
  );
};

const DraggableComponent = ({ id, type, label }: { id: string; type: string; label: string }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `${type}-${id}`,
    data: {
      type,
      id,
    },
  });

  return (
    <motion.div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`p-3 bg-gray-50 rounded-lg cursor-move border ${
        isDragging ? 'border-blue-500' : 'border-gray-200'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.div>
  );
};