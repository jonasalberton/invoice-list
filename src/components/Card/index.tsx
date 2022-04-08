import { Container } from './styles';

function Card(props: any) {
	return (
		<Container>{props.children}</Container>
	);
}

export default Card;