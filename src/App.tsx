import { styled } from './theme/stitches.config';
import Header from './components/Header';
import Card from './components/Card';

const Container = styled('div', {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  background: '$background',
  "@900bp": {
    flexDirection: 'row',
  }
});

const Body = styled('div', {
  display: 'flex',
  flex: '1',
  padding: '$sm',
  '@900bp': {
    padding: '$md'
  }
});

function App() {
  return (
    <Container>
      <Header />
      <Body>
        <Card />
      </Body>
    </Container>
  )
}

export default App
