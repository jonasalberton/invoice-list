import Card from "../../components/Card";
import { styled } from '../../theme/stitches.config';

const Title = styled('h1',  {
  color: '$text-color',
  fontWeight: 'bold'
})

const List = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '$xs'
})

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
  
  return (
    <div>
      <div>
        <Title>Invoices</Title>
      </div>
      <List>
        {list.map(item => <Card> {item} </Card>)}
      </List>
    </div>
  );
}

export default InvoiceList;