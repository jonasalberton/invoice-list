import { styled } from '../../stitches.config';

const Container = styled('div', {
  top: 0,
  width: '100%',
  height: '5rem',
  display: 'flex',
  position: 'sticky',
  alignItems: 'center',
  background: 'rgb(30, 33, 57)',
  '@menuBq': {
    width: '7rem',
    height: '100vh',
  }
});

function Header() {
  
  return (
    <Container>
      <div>Hello, I'm the header component</div>
    </Container>
  )
}

export default Header