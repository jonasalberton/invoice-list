import { Container, GhostInput, Check, Icon} from './styles';
import check from '../../assets/check.svg';

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
       <Icon src={check}/>
      </Check>
      {label}
    </Container>
  );
}

export default CheckBox;
