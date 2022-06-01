import Icon from '../Icon';
import CheckBox from '../CheckBox';
import { useRef, useState } from "react";
import { Expand } from '../../assets/icons';
import { Invoice, InvoiceStatus } from "../../models/Invoice";
import usePressEscape from "../../hooks/usePressEscape";
import useClickOutside from "../../hooks/useClickOutside";
import { Container, Button, MenuElement } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/Store';
import { applyFilter } from '../../redux/Reducers/InvoiceListReducer';
import { filterOptions } from './options';


type MenuProps = {
  onClose: () => void
}

function Menu({ onClose }: MenuProps) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.invoice.filter);
  
  const handleOnChange = (checked: boolean, value: InvoiceStatus) => {
    if (checked === false) {
      dispatch(applyFilter(null));
      return;
    }

    dispatch(applyFilter(value));
  }
  
  usePressEscape(onClose);
  useClickOutside(ref, onClose);

  return (
    <MenuElement ref={ref}>
      { filterOptions.map( option => {
          return (
            <CheckBox
              key={option.status}
              label={option.label}
              checked={filter === option.status}
              onChange={(e) => handleOnChange(e, option.status)}
            />
          )
      }) }
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
        Filter <div>by status</div>
        <Icon color="primary" icon={Expand}></Icon>
      </Button>

      {visible && <Menu onClose={toggleMenu}/>}

    </Container >
  )
}

export default Filter;