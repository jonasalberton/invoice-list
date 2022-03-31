import { ThemeColors } from "../models/ThemeColors";
import { createTheme } from './stitches.config';

const lightColors: ThemeColors = {
  primary: '#7c5dfa',
  primaryLight: '#9277ff',
  
  background: '#f8f8fb',
  surface: '#ffffff',
  floating: '#f9fafe',

  header: 'rgb(55, 59, 83)',
};

const LightTheme = createTheme({
  colors: {...lightColors}
})

export default LightTheme;
