import { ThemeColors } from "../models/ThemeColors";
import { createTheme } from './stitches.config';

const darkColors: ThemeColors = {
  primary: '#7c5dfa',
  primaryLight: '#9277ff',
  
  background: '#f8f8fb',
  surface: '#ffffff',
  floating: '#f9fafe'
};

const DarkTheme = createTheme({
  colors: {...darkColors}
});

export default DarkTheme;
