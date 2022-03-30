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
      xs: '1rem',
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