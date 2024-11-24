import { DndContext, DragEndEvent, useDroppable } from '@dnd-kit/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { addComponent } from '@/redux/slices/builderSlice';
import HeaderSection from './components/HeaderSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import { motion } from 'framer-motion';

const componentMap = {
  header: HeaderSection,
  about: AboutSection,
  skills: SkillsSection,
};

export const BuilderArea = () => {
  const dispatch = useDispatch<AppDispatch>();
  const components = useSelector((state: RootState) => state.builder.components);
  const { setNodeRef } = useDroppable({ id: 'builder-area' });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && over.id === 'builder-area') {
      const componentType = active.data?.current?.type;
      if (componentType) {
        dispatch(addComponent({
          id: `${componentType}-${Date.now()}`,
          type: componentType,
        }));
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        ref={setNodeRef}
        className="h-full bg-gray-100 p-6 overflow-y-auto"
      >
        {components.map((component) => {
          const Component = componentMap[component.type as keyof typeof componentMap];
          return Component ? (
            <motion.div
              key={component.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 bg-white rounded-lg shadow"
            >
              <Component />
            </motion.div>
          ) : null;
        })}
        
        {components.length === 0 && (
          <div className="h-full flex items-center justify-center text-gray-500">
            Drag components here to build your portfolio
          </div>
        )}
      </div>
    </DndContext>
  );
};