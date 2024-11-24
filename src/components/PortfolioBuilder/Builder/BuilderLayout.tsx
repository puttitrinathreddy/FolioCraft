import { useState, useEffect, useRef } from "react";
import { DndContext, closestCenter, DragEndEvent, DragOverlay, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
import { Resizable } from "re-resizable";
import { CustomizationPanel } from "./CustomizationPanel";
import { AVAILABLE_COMPONENTS } from "./constants";

interface ComponentPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ComponentPositions {
  [key: string]: ComponentPosition;
}

const BuilderLayout = () => {
  const [activeComponents, setActiveComponents] = useState<string[]>(() => {
    const saved = localStorage.getItem("portfolio-active-components");
    return saved ? JSON.parse(saved) : [];
  });

  const [componentPositions, setComponentPositions] = useState<ComponentPositions>(() => {
    const saved = localStorage.getItem("portfolio-component-positions");
    return saved ? JSON.parse(saved) : {};
  });

  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-active-components", JSON.stringify(activeComponents));
    localStorage.setItem("portfolio-component-positions", JSON.stringify(componentPositions));
  }, [activeComponents, componentPositions]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;

    if (!draggingId) return;

    setComponentPositions(prev => ({
      ...prev,
      [draggingId]: {
        ...prev[draggingId],
        x: prev[draggingId].x + delta.x,
        y: prev[draggingId].y + delta.y,
      }
    }));

    setDraggingId(null);
  };

  const handleDropFromSidebar = (event: DragEvent, componentId: string) => {
    event.preventDefault();
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;

    if (!activeComponents.includes(componentId)) {
      setActiveComponents(prev => [...prev, componentId]);
      setComponentPositions(prev => ({
        ...prev,
        [componentId]: {
          x,
          y,
          width: 300,
          height: 150,
        }
      }));
    }
  };

  const handleResize = (id: string, delta: { width: number; height: number }) => {
    setComponentPositions(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        width: prev[id].width + delta.width,
        height: prev[id].height + delta.height,
      }
    }));
  };

  const handleRemoveComponent = (componentId: string) => {
    setActiveComponents(prev => prev.filter(id => id !== componentId));
    setComponentPositions(prev => {
      const { [componentId]: _, ...rest } = prev;
      return rest;
    });
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={(event) => setDraggingId(event.active.id)}
    >
      <div className="flex h-screen overflow-hidden">
        <div className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Components</h2>
          <div className="space-y-2">
            {AVAILABLE_COMPONENTS.map((component) => (
              <motion.div
                key={component.id}
                className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData("componentId", component.id);
                }}
              >
                {component.title}
              </motion.div>
            ))}
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex-1 bg-gray-100 p-4 overflow-auto relative"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const componentId = e.dataTransfer.getData("componentId");
            if (componentId) {
              handleDropFromSidebar(e, componentId);
            }
          }}
        >
          {activeComponents.map((componentId) => (
            <DraggableComponent
              key={componentId}
              id={componentId}
              position={componentPositions[componentId]}
              maxWidth={containerSize.width}
              maxHeight={containerSize.height}
              onResize={handleResize}
              onRemove={handleRemoveComponent}
              onClick={() => setSelectedComponent(componentId)}
              isDragging={draggingId === componentId}
            />
          ))}
        </div>

        <CustomizationPanel
          selectedComponent={selectedComponent}
          onClose={() => setSelectedComponent(null)}
        />
      </div>
    </DndContext>
  );
};

const DraggableComponent = ({
  id,
  position,
  maxWidth,
  maxHeight,
  onResize,
  onRemove,
  onClick,
  isDragging
}: {
  id: string;
  position: ComponentPosition;
  maxWidth: number;
  maxHeight: number;
  onResize: (id: string, delta: { width: number; height: number }) => void;
  onRemove: (id: string) => void;
  onClick: () => void;
  isDragging: boolean;
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const component = AVAILABLE_COMPONENTS.find((c) => c.id === id);
  if (!component) return null;

  const Component = component.component;

  const style = {
    position: 'absolute' as const,
    left: position?.x,
    top: position?.y,
    transform: transform ? CSS.Transform.toString(transform) : undefined,
    zIndex: isDragging ? 1000 : 1,
    width: position?.width,
    height: position?.height,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <div className="absolute inset-0 bg-white rounded-lg shadow-sm overflow-hidden">
        <div
          className="drag-handle p-3 bg-gray-50 border-b border-gray-200 cursor-grab flex justify-between items-center"
          {...listeners}
          onClick={onClick}
        >
          <h3 className="text-sm font-medium text-gray-700">{component.title}</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove(id);
            }}
            className="text-gray-400 hover:text-red-500"
          >
            <TrashIcon />
          </button>
        </div>
        <Resizable
          size={{ width: position?.width, height: position?.height }}
          onResizeStop={(e, direction, ref, delta) => {
            onResize(id, delta);
          }}
          minWidth={200}
          minHeight={100}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
        >
          <div className="p-4 overflow-auto h-[calc(100%-48px)]">
            <Component images={[]} />
          </div>
        </Resizable>
      </div>
    </div>
  );
};

const TrashIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

export default BuilderLayout;