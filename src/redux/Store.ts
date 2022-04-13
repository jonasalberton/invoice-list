import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Reducers/ThemeReducer';
import invoiceReducer from './Reducers/InvoiceListReducer';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    invoice: invoiceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch