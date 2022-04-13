import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Invoice, InvoiceStatus } from '../../models/Invoice';

const FILTER_KEY = 'FILTER';
const INVOICES = 'INVOICES';

export interface InvoiceStore {
  filter: InvoiceStatus | undefined,
  invoiceList: Invoice[],
}

const initialState: InvoiceStore = {
  filter: localStorage.getItem(FILTER_KEY) as InvoiceStatus || '',
  invoiceList: JSON.parse(localStorage.getItem(INVOICES) || '[]')
}



export const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    applyFilter: (state, action: PayloadAction<InvoiceStatus>) => {
      localStorage.setItem(FILTER_KEY, action.payload);
      state.filter = action.payload;
    },
  },
})

export const { applyFilter } = invoiceSlice.actions

export default invoiceSlice.reducer