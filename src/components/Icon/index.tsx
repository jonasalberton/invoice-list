type Props = {
  icon: string
}

function Icon(props: Props) {
  
  return (
    <img src={props.icon} alt="icon" />
  );
}

export default Icon;