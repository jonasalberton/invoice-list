import { styled } from '../../theme/stitches.config';

const Container = styled('div', {
	background: '$floating',
	padding: '20px',
	'&:hover': {
		border: '1px solid $primary'
	}
})

function Card() {
	return (
		<Container>Hello Card</Container>
	);
}

export default Card;