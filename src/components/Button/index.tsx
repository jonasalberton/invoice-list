import { ButtonElement } from './styles';
import Icon from '../Icon';

type Props = {
  children: any,
  icon: JSX.Element,
  onClick: () => void,
  color: 'primary' | 'secondary' | 'neutral',
}


function Button(props: Props) {
  
  return (
    <ButtonElement
      onClick={props.onClick}
      color={props.color}>
        <Icon icon={props.icon} />
      {props.children}
    </ButtonElement>
  );
}

export default Button;