import { Container, GhostInput, Check, Icon} from './styles';
import { Check as CheckIcon} from '../../assets/icons';
import { ChangeEvent } from 'react';

type Props = {
  label: string,
  onChange: (checked: boolean) => void
}

function CheckBox({ label, onChange }: Props) {

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  }
  
  return (
    <Container>
      <GhostInput type="checkbox" onChange={handleOnChange} />
      <Check>
        <Icon>{CheckIcon}</Icon>
      </Check>
      {label}
    </Container>
  );
}

export default CheckBox;
