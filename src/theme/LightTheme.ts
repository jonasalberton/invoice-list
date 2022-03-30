import { ThemeColors } from "../models/ThemeColors";
import { createTheme } from './stitches.config';

const lightColors: ThemeColors = {
  primary: '#7c5dfa',
  primaryLight: '#9277ff',
  
  background: '#141625',
  surface: '#1e2139',
  floating: '#252945'
};

const LightTheme = createTheme({
  colors: {...lightColors}
})

export default LightTheme;
