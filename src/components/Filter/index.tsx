import { useEffect, useRef, useState } from "react";
import usePressEscape from "../../hooks/usePressEscape";
import useClickOutside from "../../hooks/useClickOutside";
import { Container, Button, MenuElement } from './styles';

type MenuProps = {
  onClose: () => void
}

function Menu({ onClose }: MenuProps) {
  const ref = useRef(null);
  
  const close = () => {
    alert('close');
  }
  
  const handleClickItem = () => {
    alert('clicou no item dentro')
  }
  
  useClickOutside(ref, onClose);
  usePressEscape(close);

  return (
    <MenuElement ref={ref}>
      <span onClick={handleClickItem}>teste de click</span>
    </MenuElement>
  )
};



// I decided to divide in two componets
// so the (escape and outSideClick) events will only listen when the menu is opened



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

    </Container >
  )
}

export default Filter;