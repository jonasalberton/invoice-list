import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg'
import { RootState } from '../../redux/Store';
import { styled } from '../../theme/stitches.config';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/Reducers/ThemeReducer';

const Button = styled('button', {
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: 0,
  width: '30px',
  height: '30px',
  borderRadius: '$circle',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '$xs',
  background: 'none',
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
      <img src={theme == 'dark' ? moon : sun} alt="Theme switcher" />
    </Button>
  );
}

export default ThemeSwitcher;
