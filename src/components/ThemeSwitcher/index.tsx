import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg'
import { RootState } from '../../redux/Store';
import { styled } from '../../theme/stitches.config';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/Reducers/ThemeReducer';

const Button = styled('button', {
  padding: 0,
  margin: '$xs',
  width: '30px',
  height: '30px',
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: '$circle',
  justifyContent: 'center',
  '&:hover': {
    opacity: '.8'
  }
})

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
