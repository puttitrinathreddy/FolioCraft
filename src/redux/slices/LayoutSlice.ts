import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Layout object shape
interface Layout {
  id: number;
  name: string;
  component: React.FC;
}

interface LayoutState {
  selectedLayout: Layout | any;
  savedLayouts: Layout[];
}

const initialState: LayoutState = {
  selectedLayout: null,
  savedLayouts: [], // Array to store saved layouts
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setSelectedLayout: (state, action: PayloadAction<Layout>) => {
      state.selectedLayout = action.payload;
    },
    saveLayout: (state, action: PayloadAction<Layout>) => {
      const layoutExists = state.savedLayouts.some(
        (layout) => layout.id === action.payload.id
      );
      if (!layoutExists) {
        state.savedLayouts.push(action.payload);
      }
    },
    deleteLayout: (state, action: PayloadAction<number>) => {
      state.savedLayouts = state.savedLayouts.filter(
        (layout) => layout.id !== action.payload
      );
    },
  },
});

export const { setSelectedLayout, saveLayout, deleteLayout } = layoutSlice.actions;

export default layoutSlice.reducer;
