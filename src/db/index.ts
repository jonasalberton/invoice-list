import { Invoice, InvoiceStatus } from "../models/Invoice";

export const initialState: Invoice[] = [
    {
      id: 'AO5213',
      status: InvoiceStatus.DRAFT,
      addreas: {
        city: '',
        country: '',
        postCode: '',
        street: '',
      },
      client: {
        addreas: {
         city: '',
         country: '',
         postCode: '',
         street: '',
        },
        email: '',
        name: 'Alex Grim',
      },
      dueDate: new Date(),
      items: [],
      paymentTerms: '',
      title: ''
    }
   ]