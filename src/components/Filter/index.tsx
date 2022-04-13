import { useRef, useState } from "react";
import usePressEscape from "../../hooks/usePressEscape";
import useClickOutside from "../../hooks/useClickOutside";
import { Container, Button, MenuElement } from './styles';
import CheckBox from '../CheckBox';
import { Expand } from '../../assets/icons';
import Icon from '../Icon';
import { InvoiceStatus } from "../../models/Invoice";

type MenuProps = {
  onClose: () => void
}

function Menu({ onClose }: MenuProps) {
  const ref = useRef(null);
  
  useClickOutside(ref, onClose);
  usePressEscape(onClose);

  const handleOnChange = () => {

  }

  return (
    <MenuElement ref={ref}>
        <CheckBox onChange={handleOnChange} label="Paid"></CheckBox>
        <CheckBox onChange={handleOnChange} label="Pending"></CheckBox>
        <CheckBox onChange={handleOnChange} label="Draft"></CheckBox>
    </MenuElement>
  )
};



// I decided to divide in two componets
// so the (escape and outSideClick) events will only listen when the menu is opened


type FilterProps = {
  onChangeFilter: (filter: InvoiceStatus) => void,
  value: InvoiceStatus
}

function Filter() {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  }

  const options = [

  ]

  return (
    <Container>
      <Button onClick={toggleMenu} opened={visible}>
        Filter <div>by status</div>
        <Icon color="primary" icon={Expand}></Icon>
      </Button>

      {visible && <Menu onClose={toggleMenu}/>}

    </Container >
  )
}

export default Filter;