import Card from "../../components/Card";
import { styled } from '../../theme/stitches.config';
import { LayoutColumn } from '../../theme/shared';
import ToolBar from './components/Toolbar';

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
    <LayoutColumn>
      <ToolBar />

      <List>
        {list.map(item => <Card> {item} </Card>)}
      </List>
    </LayoutColumn>
  );
}

export default InvoiceList;