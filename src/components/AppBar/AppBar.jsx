import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'components/shared/Container';
import Logo from 'components/shared/Logo/Logo';
import Popup from 'components/shared/Popup';
import Profile from './Profile';

import { AppBarBox, UserAvatar, UserBox } from './AppBar.styled';

const user = {
  id: 2,
  name: 'Alexa A',
  email: 'alexa.amber@gmail.com',
  img: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg',
};

const AppBar = () => {
  const [popUpShow, setPopUpShow] = useState(null);

  const handlePopupToggle = type => {
    setPopUpShow(prev => {
      switch (true) {
        case !prev:
          return type;

        case prev && prev !== type:
          return type;

        default:
          return null;
      }
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') setPopUpShow(null);
    });

    return () => {
      window.removeEventListener('keydown', e => {
        if (e.key === 'Escape') setPopUpShow(null);
      });
    };
  }, []);

  return (
    <AppBarBox>
      <Container id="appBarContainer">
        <Link to={'/'}>
          <Logo />
        </Link>

        <UserBox>
          <UserAvatar
            src={user.img}
            onClick={() => handlePopupToggle('profileOpen')}
          />

          <Popup isOpen={popUpShow === 'profileOpen'}>
            <Profile user={user} setPopUpShow={setPopUpShow} />
          </Popup>
        </UserBox>
      </Container>
    </AppBarBox>
  );
};

export default AppBar;
