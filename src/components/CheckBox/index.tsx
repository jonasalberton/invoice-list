import { ChangeEvent } from 'react';
import { Check as CheckIcon} from '../../assets/icons';
import { Container, GhostInput, Check, Icon} from './styles';

type Props = {
  label: string,
  checked: boolean,
  onChange: (checked: boolean) => void
}

function CheckBox({ label, checked, onChange }: Props) {

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  }
  
  return (
    <Container>
      <GhostInput type="checkbox" checked={checked} onChange={handleOnChange} />
      <Check>
        <Icon>{CheckIcon}</Icon>
      </Check>
      {label}
    </Container>
  );
}

export default CheckBox;
