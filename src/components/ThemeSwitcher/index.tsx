import { useState } from 'react';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg'
import { styled } from '../../theme/stitches.config';

const Button = styled('button', {
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: 0,
  width: '30px',
  height: '30px',
  borderRadius: '$circle',
  background: 'none',
  '&:hover': {
    opacity: '.8'
  }
})

function ThemeSwitcher() {
  const [theme, setTheme] = useState(sun);

  const onChange = () => {
    setTheme( current => {
      return current === sun ? moon : sun;
    })
  }
  
  return (
    <Button onClick={onChange}>
      <img src={theme} alt="Theme switcher" />
    </Button>
  );
}

export default ThemeSwitcher;