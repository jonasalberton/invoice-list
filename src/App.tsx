import { styled } from './stitches.config';
import Header from './components/Header';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  "@menuBq": {
    flexDirection: 'row'
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
