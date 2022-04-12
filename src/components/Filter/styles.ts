import { styled } from '../../theme/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  marginRight: '$sm',
  position: 'relative',
  justifyContent: 'center'
});

export const Button = styled('button', {
  fontWeight: 'bold'
});

export const MenuElement = styled('div', {
  zIndex: 1,
  top: '45px',
  padding: '$xs',
  display: 'block',
  boxShadow: '$card',
  position: 'absolute',
  borderRadius: '$smooth',
  background: '$floating',
});