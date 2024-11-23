import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface DraggableComponentProps {
  id: string;
  type: string;
  children: React.ReactNode;
}

export const DraggableComponent = ({ id, type, children }: DraggableComponentProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="border border-gray-200 rounded-lg mb-4 bg-white cursor-move"
    >
      {children}
    </div>
  );
};