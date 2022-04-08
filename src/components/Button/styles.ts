import { styled } from '../../theme/stitches.config';

export const ButtonElement = styled('button', {
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