import React, { useEffect, useState } from 'react';
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
  display: 'none',
  boxShadow: '$card',
  position: 'absolute',
  borderRadius: '$smooth',
  background: '$floating',
  variants: {
    visible: {
      true: {
        display: 'block'
      }
    }
  }
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

  const handleclickItem = () => {
    alert('clicou no item dentro')
  }

  return (
    <MenuElement visible={true}>
      <span onClick={handleclickItem}>teste de click</span>
    </MenuElement>
  )
};





function Filter() {
  const [visible, setVisible] = useState(false);

  const closeMenu = () => {
    setVisible(!visible);
  }

  return (
    <Container>
      <Button onClick={() => setVisible(!visible)}>
        Filter by status
      </Button>

      {visible && <Menu onClose={closeMenu}/>}

      <BackDrop
        visible={visible}
        onClick={() => setVisible(!visible)}>
      </BackDrop>
    </Container >
  )
}

export default Filter;