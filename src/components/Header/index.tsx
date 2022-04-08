import Avatar from '../Avatar';
import logo from '../../assets/logo.svg';
import ThemeSwitcher from '../ThemeSwitcher';
import { Container, Logo, Svg } from './styles';

function Header() {
  return (
    <Container>
      <Logo>
        {' '}
        <Svg src={logo} />{' '}
      </Logo>
      <ThemeSwitcher />
      <Avatar />
    </Container>
  );
}

export default Header;
