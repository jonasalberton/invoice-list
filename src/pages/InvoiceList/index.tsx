import { useDispatch, useSelector } from 'react-redux';
import { Add } from '../../assets/icons';
import { Card, Filter, Button } from '../../components';
import { RootState } from '../../redux/Store';
import { LayoutColumn } from '../../theme/shared';
import { List, ToolBar, Title, InvoiceCount, LongText } from './styles';
import { applyFilter } from '../../redux/Reducers/InvoiceListReducer';
import { Invoice, InvoiceStatus } from '../../models/Invoice';
import ListItem from './ListItem';

function InvoiceList() {
  

  const dispatch = useDispatch();



  const list: Invoice[] = [
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

  const goToNewInvoice = () => {
    alert('user  whats to move foward')
  }
  
  return (
    <LayoutColumn>
      <ToolBar>
        <LayoutColumn>
          <Title>Invoices</Title>
          <InvoiceCount>The are {list.length} total invoices</InvoiceCount>
        </LayoutColumn>

        <Filter></Filter>

        <Button color='primary' icon={Add} onClick={goToNewInvoice}>
          New <LongText id='long-text'>Invoice</LongText>
        </Button>

      </ToolBar>

      <List>
        {list.map(invoice => <ListItem invoice={invoice} />)}
      </List>

    </LayoutColumn>
  );
}

export default InvoiceList;