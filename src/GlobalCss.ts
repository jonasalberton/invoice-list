import { globalCss } from './theme/stitches.config';

const GLOBAL_CSS = globalCss({
  'body': {
    'margin': 0,
    overflowX: 'hidden',
    color: '$text-color',
    fontSize: '$sm',
    fontFamily: 'Spartan, sans-serif',
    transition: 'background 0.3s ease 0s',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  }
});

export default GLOBAL_CSS;