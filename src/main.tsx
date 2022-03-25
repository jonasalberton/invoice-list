import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { globalCss } from './stitches.config';

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
    <App />
    {css()}
  </React.StrictMode>,
  document.getElementById('root')
)
