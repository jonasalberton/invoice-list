import { styled } from '../../theme/stitches.config';
import avatar from '../../assets/avatar.png';

const Button = styled('button', {
  width: '32px',
  height: '32px',
  margin: '$sm'
});

function Avatar() {

  const openPortal = () => {
    alert('open Portal')
  }

  return (
    <Button onClick={openPortal}>
      <img src={avatar} alt="Profile Picture" />
    </Button>
  );
}

export default Avatar;
