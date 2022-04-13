import { Container, GhostInput, Check, Icon} from './styles';
import { Check as CheckIcon} from '../../assets/icons';

type Props = {
  label: string
}

function CheckBox({ label }: Props) {

  const handleClick = () => {
    console.log('change');
  }
  
  return (
    <Container>
      <GhostInput type="checkbox" onChange={handleClick} />
      <Check>
        <Icon>{CheckIcon}</Icon>
      </Check>
      {label}
    </Container>
  );
}

export default CheckBox;
