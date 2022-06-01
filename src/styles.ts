import { styled } from './theme/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  minHeight: '100vh',
  color: '$text-color',
  flexDirection: 'column',
  background: '$background',
  "@900bp": {
    flexDirection: 'row',
  }
});

export const Body = styled('div', {
  flex: '1',
  padding: '$md $sm',
  display: 'flex',
  justifyContent: 'center',
  '@900bp': {
    padding: '$md'
  },
  '> div': {
    maxWidth: '1000px',
  }
});
