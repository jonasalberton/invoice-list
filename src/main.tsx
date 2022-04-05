import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalCss from './GlobalCss';
import { store } from './redux/Store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {GlobalCss()}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
