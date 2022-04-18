export interface Addreas {
  street: string,
  city: string,
  postCode: string,
  country: string,
}

export interface Client {
  name: string,
  email: string,
  addres: Addreas
}

export interface InvoiceItem {
  id: string,
  name: string,
  qty: number,
  price: number
}


export interface Invoice  {
  id: number,
  title: string,
  addreas: Addreas,
  client: Client,
  invoiceDate: Date,
  paymentTerms: string,
  items: InvoiceItem[]
}

export enum InvoiceStatus {
  PAID = 'Paid',
  PENDING = 'Pending',
  DRAFT = 'Draf'
}
