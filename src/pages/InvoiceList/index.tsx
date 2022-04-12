import add from '../../assets/add.svg';
import { Card, Filter, Button } from '../../components';
import { LayoutColumn } from '../../theme/shared';
import { List, ToolBar, Title, InvoiceCount, LongText } from './styles';

function InvoiceList() {
  
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

        <Button color='primary' icon={add} onClick={goToNewInvoice}>
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