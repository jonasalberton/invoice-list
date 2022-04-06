import { useEffect, useState } from 'react';
import { styled } from '../../../../theme/stitches.config';

const Container = styled('div', {
  display: 'flex',
  marginRight: '$sm',
  position: 'relative',
  justifyContent: 'center'
});

const Button = styled('button', {
  fontWeight: 'bold'
});

const BackDrop = styled('div', {
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'none',
  position: 'fixed',
  variants: {
    visible: {
      true: {
        display: 'block'
      }
    }
  }
});

const MenuElement = styled('div', {
  zIndex: 1,
  top: '45px',
  padding: '$xs',
  display: 'block',
  boxShadow: '$card',
  position: 'absolute',
  borderRadius: '$smooth',
  background: '$floating',
});


type MenuProps = {
  onClose: () => void
}


function Menu({ onClose }: MenuProps) {

  useEffect(() => {
    listenKeyDown();
    return () => {
      removeListnerKeyDown();
    }
  }, []);

  const listenKeyDown = () => {
    window.addEventListener('keydown', handleKeyDown);
  }

  const removeListnerKeyDown = () => {
    window.removeEventListener('keydown', handleKeyDown);
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Escape') return;
    onClose();
  }

  const handleClickItem = () => {
    alert('clicou no item dentro')
  }

  return (
    <MenuElement>
      <span onClick={handleClickItem}>teste de click</span>
    </MenuElement>
  )
};










function Filter() {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  }

  return (
    <Container>
      <Button onClick={toggleMenu}>
        Filter by status
      </Button>

      {visible && <Menu onClose={toggleMenu}/>}

      <BackDrop
        visible={visible}
        onClick={toggleMenu}>
      </BackDrop>
    </Container >
  )
}

export default Filter;