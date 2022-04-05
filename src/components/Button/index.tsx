import { styled } from '../../theme/stitches.config';
import { isNullOrUndefined } from '../../utils';

const ButtonElement = styled('button', {
  padding: '$xs',
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
    },
    icon: {
      true: {
        padding: '5px 10px 5px 5px'
      }
    }
  },
  '&:hover': {
    opacity: '.8'
  }
});

const Icon = styled('img', {
  width: '35px',
  height: '35px'
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
      icon={!isNullOrUndefined(props.icon)}
      color={props.color}>
        <Icon src={props.icon} alt="" />
      {props.children}
    </ButtonElement>
  );
}

export default Button;