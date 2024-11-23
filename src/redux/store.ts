// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';  
import portfolioReducer from "./slices/portfolioSlice";
import themeReducer from "./slices/themeSlice";
import layoutReducer from "./slices/layoutSlice";
import builderReducer from './slices/builderSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    portfolio: portfolioReducer,
    theme: themeReducer,
    layout: layoutReducer,
    builder: builderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
