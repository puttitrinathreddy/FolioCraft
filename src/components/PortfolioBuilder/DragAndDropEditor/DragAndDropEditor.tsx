
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { restrictToParentElement, restrictToWindowEdges } from "@dnd-kit/modifiers";
import { updateComponent } from "../../../redux/slices/dragDropSlice";

const DragAndDropEditor: React.FC = () => {
    const components = useSelector((state: any) => state.dragDrop.components);
    const dispatch = useDispatch();

    return (
        <DndContext
            modifiers={[restrictToParentElement, restrictToWindowEdges]}
            onDragEnd={(event) => {
                const { id, delta } = event.active;
                const component = components.find((comp: any) => comp.id === id);
                if (component) {
                    dispatch(
                        updateComponent({
                            id,
                            x: component.x + delta.x,
                            y: component.y + delta.y,
                        })
                    );
                }
            }}
        >
            <div className=" space-y-2 relative w-full h-screen bg-gray-100 grid grid-cols-12 gap-2">
                {components.map((component) => (
                    <DraggableComponent key={component.id} {...component} />
                ))}
            </div>
        </DndContext>
    );
};

const DraggableComponent: React.FC<{ id: string; x: number; y: number; width: number; height: number }> = ({
    id,
    x,
    y,
    width,
    height,
}) => {
    const { setNodeRef, listeners, transform } = useDraggable({ id });

    const style = {
        transform: `translate(${x + (transform?.x || 0)}px, ${y + (transform?.y || 0)}px)`,
        width,
        height,
    };

    return (
        <div ref={setNodeRef} style={style} className="absolute bg-blue-500 rounded" {...listeners}>
            Component {id}
        </div>
    );
};

export default DragAndDropEditor;
