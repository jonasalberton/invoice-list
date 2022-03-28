import Card from './components/Card';
import Header from './components/Header';
import { styled } from './theme/stitches.config';
import { RootState, store } from './redux/Store';
import { Provider, useSelector } from 'react-redux';

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
  flex: '1',
  padding: '$sm',
  display: 'flex',
  '@900bp': {
    padding: '$md'
  }
});


function App() {

  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Body>
          <Card />
        </Body>
      </Container>
    </Provider>
  )
}

export default App
