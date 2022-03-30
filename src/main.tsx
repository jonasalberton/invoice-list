import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/Store';
import { Provider } from 'react-redux';
import { globalCss } from './theme/stitches.config';

const css = globalCss({
  'body': {
    'margin': 0,
    overflowX: 'hidden',
    fontFamily: 'Spartan, sans-serif',
    transition: 'background 0.3s ease 0s',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {css()}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
