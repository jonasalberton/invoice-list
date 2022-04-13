import { styled } from '../../theme/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  marginRight: '$sm',
  position: 'relative',
  justifyContent: 'center'
});

export const Button = styled('button', {
  fontWeight: 'bold',
  display: 'flex',
  outline: 'none',
  alignItems: 'center',
  gap: '$xxs',
  justifyContent: 'center',
  ' > span': {
    transition: 'transform .3s'
  },
  ' > div': {
    display: 'none'
  },
  '@700bp': {
    ' > div': {
      display: 'block'
    }
  },
  variants: {
    opened: {
      true: {
        ' > span': {
          transform: 'rotate(180deg)',
        }
      }
    }
  }
});

export const MenuElement = styled('div', {
  zIndex: 1,
  top: '45px',
  gap: '$xs',
  padding: '$sm',
  display: 'flex',
  minWidth: '200px',
  boxShadow: '$modal',
  position: 'absolute',
  borderRadius: '$smooth-lg',
  flexDirection: 'column',
  background: '$floating',
});