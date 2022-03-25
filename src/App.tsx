import { styled } from './theme/stitches.config';
import Header from './components/Header';

const Container = styled('div', {
  display: 'flex',
  background: '$background',
  flexDirection: 'column',
  minHeight: '100vh',
  "@900bp": {
    flexDirection: 'row',
  }
})

function App() {
  return (
    <Container>
      <Header />
      <div>body</div>
    </Container>
  )
}

export default App
