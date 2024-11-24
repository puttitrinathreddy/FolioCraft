// src/redux/slices/dragDropSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ComponentState {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface DragDropState {
  components: ComponentState[];
}

const initialState: DragDropState = {
  components: [],
};

const dragDropSlice = createSlice({
  name: "dragDrop",
  initialState,
  reducers: {
    addComponent: (state, action: PayloadAction<ComponentState>) => {
      state.components.push(action.payload);
    },
    updateComponent: (
      state,
      action: PayloadAction<{ id: string; x: number; y: number; width?: number; height?: number }>
    ) => {
      const component = state.components.find((comp) => comp.id === action.payload.id);
      if (component) {
        component.x = action.payload.x;
        component.y = action.payload.y;
        if (action.payload.width) component.width = action.payload.width;
        if (action.payload.height) component.height = action.payload.height;
      }
    },
    removeComponent: (state, action: PayloadAction<string>) => {
      state.components = state.components.filter((comp) => comp.id !== action.payload);
    },
  },
});

export const { addComponent, updateComponent, removeComponent } = dragDropSlice.actions;

export default dragDropSlice.reducer;
