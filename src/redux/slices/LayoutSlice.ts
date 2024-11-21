// src/redux/slices/layoutSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LayoutState {
  theme: 'light' | 'dark';
}

const initialState: LayoutState = {
  theme: 'light',
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = layoutSlice.actions;
export default layoutSlice.reducer;
