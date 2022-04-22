import { Card } from "../../components";
import { Invoice } from "../../models/Invoice";
import { Id, ListItemContainer, Total, DueDate, Client, Status } from './styles';

type Props = {
  invoice: Invoice;
}

function ListItem({invoice}: Props) {
  
  return (
    <Card>
      <ListItemContainer>
        <Id>{invoice.id}</Id>
        <DueDate>{Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(invoice.dueDate)}</DueDate>
        <Client>{invoice.client.name}</Client>
        <Total>$1233</Total>
        <Status>{invoice.status}</Status>
      </ListItemContainer>
    </Card>
  )

}

export default ListItem;