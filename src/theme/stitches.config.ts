import { createStitches } from '@stitches/react';
import { ThemeColors } from '../models/ThemeColors';

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
      ...{} as ThemeColors
    },
    space: {
      xxs: '.5rem',
      xs: '1rem',
      sm: '2rem',
      md: '4rem',
      lg: '6rem'
    },
    radii: {
      circle: '50%',
      smooth: '5px',
      pill: '25px'
    },
    shadows: {
      card: 'rgb(72 84 159 / 10%) 0px 10px 10px -10px'
    },
    fontSizes: {
      xs: '.5rem',
      sm: '.8rem',
      md: '1rem',
      lg: '2rem'
    }
  },
  media: {
    '900bp': '(min-width: 900px)',
    '700bp': '(min-width: 700px)',
  },
  utils: {
    marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
  },
});