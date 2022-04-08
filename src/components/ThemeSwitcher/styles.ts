import { styled } from '../../theme/stitches.config';

export const Button = styled('button', {
  padding: 0,
  margin: '$xs',
  width: '30px',
  height: '30px',
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: '$circle',
  justifyContent: 'center',
  '&:hover': {
    opacity: '.8'
  }
})