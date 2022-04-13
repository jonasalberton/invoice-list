import { styled } from '../../theme/stitches.config';

export const Check = styled('div', {
  display: 'block',
  width: '15px',
  height: '15px',
  borderRadius: '2px',
  border: '1px solid transparent',
  backgroundColor: '$background',
  '> div': {
    display: 'none'
  },
})

export const Container = styled('label', {
  display: 'flex',
  gap: '$xs',
  fontWeight: 'bold',
  cursor: 'pointer',
  alignItems: 'center',
  [`&:hover ${Check}`]: {
    borderColor: '$primary'
  }
});

export const Icon = styled('span', {
  display: 'none',
  'svg': {
    width: '14px',
    height: '14px',
  }
});

export const GhostInput = styled('input', {
  display: 'none',
  [`&:checked ~ ${Check}`]: {
    backgroundColor: '$primary',
  },
  [`&:checked ~ ${Check} > ${Icon}`]: {
   display: 'block'
  },
});

