import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: '#7c5dfa',
      primaryLight: '#9277ff',
      
      background: '#141625',
      surface: '#1e2139',
      floating: '#252945'
    },
    space: {
      sm: '2rem',
      md: '4rem',
      lg: '6rem'
    },
    radii: {
      circle: '50%'
    }
  },
  media: {
    '900bp': '(min-width: 900px)',
  },
  utils: {
    marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
  },
});