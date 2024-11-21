// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';  
import portfolioReducer from "./slices/PortfolioSlice";
import themeReducer from "./slices/ThemeSlice";
import layoutReducer from "./slices/LayoutSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    portfolio: portfolioReducer,
    theme: themeReducer,
    layout: layoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
