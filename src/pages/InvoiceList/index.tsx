import Card from "../../components/Card";
import { styled } from '../../theme/stitches.config';

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
    <List>
      {list.map(item => <Card> {item} </Card>)}
    </List>
  );
}

export default InvoiceList;