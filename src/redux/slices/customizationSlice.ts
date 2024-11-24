import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomizationState {
  colors: { primary: string; secondary: string };
  fonts: { primary: string; secondary: string };
}

const initialState: CustomizationState = {
  colors: { primary: '#FF5733', secondary: '#33FF57' },
  fonts: { primary: 'Roboto', secondary: 'Arial' },
};

const customizationSlice = createSlice({
  name: 'customization',
  initialState,
  reducers: {
    updateColors(state, action: PayloadAction<{ primary: string; secondary: string }>) {
      state.colors = action.payload;
    },
    updateFonts(state, action: PayloadAction<{ primary: string; secondary: string }>) {
      state.fonts = action.payload;
    },
  },
});

export const { updateColors, updateFonts } = customizationSlice.actions;
export default customizationSlice.reducer;
