import { styled } from '../../theme/stitches.config';
import logo from '../../assets/logo.svg';
import ThemeSwitcher from '../ThemeSwitcher';

const Container = styled('div', {
  top: 0,
  width: '100%',
  height: '5rem',
  display: 'flex',
  position: 'sticky',
  alignItems: 'center',
  background: '$surface',
  justifyContent: 'space-between',
  '@900bp': {
    width: '6rem',
    height: '100vh',
    flexDirection: 'column',
    borderRadius: '0 20px 20px 0'
  }
});

const Logo = styled('div', {
  background: '$primary',
  position: 'relative',
  width: '5rem',
  height: '5rem',
  display: 'flex',
  alignSelf: 'start',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0 20px 20px 0',
  '&:after': {
    content: '',
    width: '100%',
    height: '50%',
    borderRadius: '20px 0',
    position: 'absolute',
    bottom: 0,
    background: '$primaryLight'
  },
  '@900bp': {
    width: '6rem',
    height: '6rem',
  }
});

const Svg = styled('img', {
  zIndex: 1,
  width: '2em',
  height: '2em'
});

function Header() {
  
  return (
    <Container>
      <Logo> <Svg src={logo} /> </Logo>
      <ThemeSwitcher />
    </Container>
  )
}

export default Header