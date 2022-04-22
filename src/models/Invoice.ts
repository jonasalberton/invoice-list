export interface Addreas {
  street: string,
  city: string,
  postCode: string,
  country: string,
}

export interface Client {
  name: string,
  email: string,
  addreas: Addreas
}

export interface InvoiceItem {
  id: string,
  name: string,
  qty: number,
  price: number
}


export interface Invoice  {
  id: string,
  title: string,
  status: InvoiceStatus,
  addreas: Addreas,
  client: Client,
  dueDate: Date,
  paymentTerms: string,
  items: InvoiceItem[]
}

export enum InvoiceStatus {
  PAID = 'Paid',
  PENDING = 'Pending',
  DRAFT = 'Draf'
}
