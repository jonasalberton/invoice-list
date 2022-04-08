import { Button } from './styles';
import avatar from '../../assets/avatar.png';

function Avatar() {

  const openPortal = () => {
    alert('open Portal');
  }

  return (
    <Button onClick={openPortal}>
      <img src={avatar} alt="Profile Picture" />
    </Button>
  );
}

export default Avatar;
