import { useRef, useState } from "react";
import usePressEscape from "../../hooks/usePressEscape";
import useClickOutside from "../../hooks/useClickOutside";
import { Container, Button, MenuElement } from './styles';
import CheckBox from '../CheckBox';
import { Expand } from '../../assets/icons';
import Icon from '../Icon';

type MenuProps = {
  onClose: () => void
}

function Menu({ onClose }: MenuProps) {
  const ref = useRef(null);
  
  const close = () => {
    alert('close');
  }
  
  useClickOutside(ref, onClose);
  usePressEscape(close);

  return (
    <MenuElement ref={ref}>
        <CheckBox label="Paid"></CheckBox>
        <CheckBox label="Pending"></CheckBox>
        <CheckBox label="Draft"></CheckBox>
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
      <Button onClick={toggleMenu} opened={visible}>
        Filter by status
        <Icon color="primary" icon={Expand}></Icon>
      </Button>

      {visible && <Menu onClose={toggleMenu}/>}

    </Container >
  )
}

export default Filter;