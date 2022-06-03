import ListItem from './ListItem';
import { initialState } from '../../db';
import { Add } from '../../assets/icons';
import { Filter, Button } from '../../components';
import { LayoutColumn } from '../../theme/shared';
import { List, ToolBar, Title, InvoiceCount, LongText } from './styles';

function InvoiceList() {

  const goToNewInvoice = () => {
    alert('user  whats to move foward')
  }
  
  return (
    <LayoutColumn>
      <ToolBar>
        <LayoutColumn>
          <Title>Invoices</Title>
          <InvoiceCount>The are {initialState.length} total invoices</InvoiceCount>
        </LayoutColumn>

        <Filter />

        <Button color='primary' icon={Add} onClick={goToNewInvoice}>
          New <LongText id='long-text'>Invoice</LongText>
        </Button>

      </ToolBar>

      <List>
        {initialState.map(invoice => <ListItem key={invoice.id} invoice={invoice} />)}
      </List>

    </LayoutColumn>
  );
}

export default InvoiceList;