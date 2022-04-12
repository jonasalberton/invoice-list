import { styled } from './stitches.config';

const LayoutRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flex: 1
});

const LayoutColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1
});

export { LayoutColumn, LayoutRow };
