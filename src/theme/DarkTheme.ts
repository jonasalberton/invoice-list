import { ThemeColors } from "../models/ThemeColors";
import { createTheme } from './stitches.config';

const darkColors: ThemeColors = {
  'primary': '#7c5dfa',
  'primary-light': '#9277ff',
  
  'background': '#141625',
  'surface': '#1e2139',
  'floating': '#252945',

  'header': '#1e2139',

  'text-color': '#fff',
  'text-color-dark': '#dfe3fa'
};

const DarkTheme = createTheme({
  colors: {...darkColors}
});

export default DarkTheme;
