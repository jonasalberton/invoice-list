import { Button } from './styles';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg'
import { RootState } from '../../redux/Store';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/Reducers/ThemeReducer';

function ThemeSwitcher() {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  const onChange = () => {
    dispatch(toggleTheme());
  }
  
  return (
    <Button onClick={onChange}>
      <img src={theme == 'dark' ? sun : moon} alt="Theme switcher" />
    </Button>
  );
}

export default ThemeSwitcher;
