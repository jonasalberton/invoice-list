import { styled } from '../../theme/stitches.config';

export const Container = styled('div', {
	padding: '20px',
	cursor: 'pointer',
	boxShadow: '$card',
	background: '$surface',
	borderRadius: '$smooth',
	transition: 'border .3s',
	border: '1px solid transparent',
	'&:hover': {
		borderColor: '$primary'
	}
})