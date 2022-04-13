import { useDispatch, useSelector } from 'react-redux';
import { Add } from '../../assets/icons';
import { Card, Filter, Button } from '../../components';
import { RootState } from '../../redux/Store';
import { LayoutColumn } from '../../theme/shared';
import { List, ToolBar, Title, InvoiceCount, LongText } from './styles';
import { applyFilter } from '../../redux/Reducers/InvoiceListReducer';
import { InvoiceStatus } from '../../models/Invoice';

function InvoiceList() {
  

  const filter = useSelector((state: RootState) => state.invoice.filter);
  const dispatch = useDispatch();

  console.log('filter', filter);
  dispatch(applyFilter(InvoiceStatus.PENDING))


  const list: string[] = [
    'one',
    'two',
    'three',
    'four',
    'one',
    'two',
    'three',
    'four',
    'one',
    'two',
    'three',
    'four',
    'one',
    'two',
    'three',
    'four',
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
        {list.map(item => <Card> {item} </Card>)}
      </List>
    </LayoutColumn>
  );
}

export default InvoiceList;