import Avatar from '../Avatar';
import { Logo } from '../../assets/icons';
import ThemeSwitcher from '../ThemeSwitcher';
import { Container, Brand, BrandIcon } from './styles';

function Header() {
  return (
    <Container>
      <Brand>
        <BrandIcon>
          {Logo}
        </BrandIcon>
      </Brand>
      <ThemeSwitcher />
      <Avatar />
    </Container>
  );
}

export default Header;
