import add from '../../../../assets/add.svg';
import Button from '../../../../components/Button';
import { LayoutColumn } from '../../../../theme/shared';
import { styled } from '../../../../theme/stitches.config';
import Filter from '../Filter';

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
});

const LongText = styled('span', {
  display: 'none',
  '@700bp': {
    display: 'block'
  }
});


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

      <Filter></Filter>

      <Button color='primary' icon={add} onClick={goToNewInvoice}>
        New <LongText id='long-text'>Invoice</LongText>
      </Button>
      
    </Container>
  )
}

export default Toolbar;
