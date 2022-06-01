import { InvoiceStatus } from '../../models/Invoice';

type FilterOptions = {
  label: string;
  status: InvoiceStatus;
};

export const filterOptions: FilterOptions[] = [
  {
    label: 'Draft',
		status: InvoiceStatus.DRAFT
  },
	{
    label: 'Paid',
		status: InvoiceStatus.PAID
  },
	{
    label: 'Draft',
		status: InvoiceStatus.PENDING
  },
];
