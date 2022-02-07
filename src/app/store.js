import { configureStore } from '@reduxjs/toolkit';
import portfolio from './PortfolioSlice'



export const store = configureStore({
  reducer: {
    portfolio
  },
  devTools: process.env.NODE_ENV !== 'production'
});




