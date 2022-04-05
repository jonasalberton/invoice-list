import { styled } from '../../theme/stitches.config';
import { isNullOrUndefined } from '../../utils';
import Icon from '../Icon';

const ButtonElement = styled('button', {
  padding: '$xxs',
  display: 'flex',
  alignItems: 'center',
  gap: '$xxs',
  fontWeight: 'bold',
  borderRadius: '$pill',
  variants: {
    color: {
      primary: {
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: '$surface',
      },
      neutral: {
        backgroundColor: '$primary',
      }
    }
  },
  '&:hover': {
    opacity: '.8'
  }
});


type Props = {
  children: any,
  icon: string,
  onClick: () => void,
  color: 'primary' | 'secondary' | 'neutral',
}

function Button(props: Props) {
  
  return (
    <ButtonElement
      onClick={props.onClick}
      // icon={!isNullOrUndefined(props.icon)}
      color={props.color}>
        <Icon icon={props.icon} />
      {props.children}
    </ButtonElement>
  );
}

export default Button;