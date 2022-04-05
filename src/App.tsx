import Header from './components/Header';
import { styled } from './theme/stitches.config';
import { RootState, store } from './redux/Store';
import { Provider, useSelector } from 'react-redux';
import DarkTheme from './theme/DarkTheme';
import LightTheme from './theme/LightTheme';
import Router from './Router';

const Container = styled('div', {
  display: 'flex',
  minHeight: '100vh',
  color: '$text-color',
  flexDirection: 'column',
  background: '$background',
  "@900bp": {
    flexDirection: 'row',
  }
});

const Body = styled('div', {
  flex: '1',
  padding: '$md $sm',
  display: 'flex',
  justifyContent: 'center',
  '@900bp': {
    padding: '$md'
  },
  '> div': {
    maxWidth: '700px',
  }
});



function App() {

  const theme = useSelector((state: RootState) => state.theme.value );

  return (
    <Provider store={store}>
      <Container className={ theme === 'dark' ? DarkTheme : LightTheme }>
        <Header />
        <Body>
          <Router />
        </Body>
      </Container>
    </Provider>
  )
}

export default App
