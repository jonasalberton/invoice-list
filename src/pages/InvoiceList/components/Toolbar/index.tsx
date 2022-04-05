import { styled } from '../../../../theme/stitches.config';
import { LayoutColumn } from '../../../../theme/shared';
import Button from '../../../../components/Button';
import add from '../../../../assets/add.svg';

const Container = styled('div', {
  marginBottom: '$md',
  width: '100%',
  display: 'flex',
  alignItems: 'center'
});

const Title = styled('h1',  {
  fontSize: '$lg',
  fontWeight: 'bold',
  marginBottom: '$xxs'
});

const InvoiceCount = styled('span', {
  color: '$text-color-dark',
  fontSize: '$sm'
})


function Toolbar() {

  const goToNewInvoice = () => {
    alert('chamou aqui');
  }
  
  return (
    <Container>
      <LayoutColumn>
        <Title>Invoices</Title>
        <InvoiceCount>The are 7 total invoices</InvoiceCount>
      </LayoutColumn>
  
      filter by status
  
      <Button icon={add} onClick={goToNewInvoice} color='primary'>New invoice</Button>
    </Container>
  )
}

export default Toolbar;
