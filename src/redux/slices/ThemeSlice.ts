import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomTheme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  fontSize: 'small' | 'medium' | 'large';
  // Add more theme properties as needed
}

interface ThemeState {
  currentTheme: 'light' | 'dark' | 'custom';
  customTheme: CustomTheme;
}

const initialState: ThemeState = {
  currentTheme: 'light',
  customTheme: {
    primaryColor: '#007AFF',
    secondaryColor: '#5856D6',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    fontFamily: 'inter',
    fontSize: 'medium',
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setCurrentTheme: (state, action: PayloadAction<'light' | 'dark' | 'custom'>) => {
      state.currentTheme = action.payload;
    },
    updateCustomTheme: (state, action: PayloadAction<Partial<CustomTheme>>) => {
      state.customTheme = {
        ...state.customTheme,
        ...action.payload,
      };
    },
  },
});

export const { setCurrentTheme, updateCustomTheme } = themeSlice.actions;
export default themeSlice.reducer;