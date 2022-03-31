import { styled } from '../../theme/stitches.config';

const Container = styled('div', {
	background: '$surface',
	padding: '20px',
	cursor: 'pointer',
	borderRadius: '$smooth',
	boxShadow: '$card',
	transition: 'border .3s',
	border: '1px solid transparent',
	'&:hover': {
		borderColor: '$primary'
	}
})

function Card(props: any) {
	return (
		<Container>{props.children}</Container>
	);
}

export default Card;