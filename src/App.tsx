import Router from './Router';
import Header from './components/Header';
import DarkTheme from './theme/DarkTheme';
import { Body, Container } from './styles';
import LightTheme from './theme/LightTheme';
import { RootState, store } from './redux/Store';
import { Provider, useSelector } from 'react-redux';


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
