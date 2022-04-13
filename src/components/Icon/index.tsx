import { IconContainer } from './styles';

type Props = {
  icon: JSX.Element,
  size?: 'md' | 'lg',
  color?: 'white' | 'primary'
}

function Icon(props: Props) {
  const size = props.size || 'md';
  const color = props.color || 'white';

  return (
    <IconContainer color={color} size={size}>
      {props.icon}
    </IconContainer>
  );
}

export default Icon;