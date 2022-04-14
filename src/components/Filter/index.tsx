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
      <CheckBox 
        label="Paid"
        checked={filter === InvoiceStatus.PAID}
        onChange={(e) => handleOnChange(e, InvoiceStatus.PAID)}
      />
      <CheckBox 
        label="Pending"
        checked={filter === InvoiceStatus.PENDING}
        onChange={(e) => handleOnChange(e, InvoiceStatus.PENDING)}
      />
      <CheckBox
        label="Draft"
        checked={filter === InvoiceStatus.DRAFT}
        onChange={(e) => handleOnChange(e, InvoiceStatus.DRAFT)}
      />
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