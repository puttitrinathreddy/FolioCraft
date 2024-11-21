// src/redux/slices/themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  fontFamily: string;
  primaryColor: string;
  layoutStyle: 'grid' | 'list';
}

const initialState: ThemeState = {
  fontFamily: 'Arial',
  primaryColor: '#3498db', // Default color (blue)
  layoutStyle: 'grid', // Default layout
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    setLayoutStyle: (state, action: PayloadAction<'grid' | 'list'>) => {
      state.layoutStyle = action.payload;
    },
  },
});

export const { setFontFamily, setPrimaryColor, setLayoutStyle } = themeSlice.actions;
export default themeSlice.reducer;
