import { styled } from '../../theme/stitches.config';

export const ToolBar = styled('div', {
  marginBottom: '$md',
  width: '100%',
  display: 'flex',
  alignItems: 'center'
});

export const Title = styled('h1',  {
  fontSize: '$lg',
  fontWeight: 'bold',
  marginBottom: '$xxs'
});

export const InvoiceCount = styled('span', {
  color: '$text-color-dark',
  fontSize: '$sm'
});

export const LongText = styled('span', {
  display: 'none',
  '@700bp': {
    display: 'block'
  }
});

export const List = styled('div', {
  flex: 1,
  gap: '$xs',
  display: 'flex',
  flexDirection: 'column',
})
