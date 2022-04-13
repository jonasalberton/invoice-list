import { Button } from './styles';
import { Sun, Moon } from '../../assets/icons';
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
      {theme == 'dark' ? Sun : Moon}
    </Button>
  );
}

export default ThemeSwitcher;
