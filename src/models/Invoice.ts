export interface Invoice  {
  id: number,
  title: string
}

export enum InvoiceStatus {
  PAID = 'Paid',
  PENDING = 'Pending',
  DRAFT = 'Draf'
}