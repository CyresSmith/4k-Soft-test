import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAuth } from 'redux/selectors';

import Container from 'components/shared/Container';
import Logo from 'components/shared/Logo';
import Popup from 'components/shared/Popup';
import Modal from 'components/shared/Modal';
import Settings from './Profile/Settings';
import Profile from './Profile';
import UserNavigation from './UserNavigation';

import { AppBarBox, UserAvatar, UserBox } from './AppBar.styled';

const AppBar = () => {
  const [popUpShow, setPopUpShow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userState, setUserState] = useState({
    _id: '',
    fullName: '',
    email: '',
  });

  const auth = useSelector(getAuth);

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
    setUserState(auth.user);
  }, [auth.user]);

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

        {!userState._id || !auth.accessToken ? (
          <UserNavigation />
        ) : (
          <UserBox>
            <UserAvatar
              src={userState.avatarUrl}
              onClick={() => handlePopupToggle('profileOpen')}
            />

            <Popup isOpen={popUpShow === 'profileOpen'}>
              <Profile
                user={userState}
                setPopUpShow={setPopUpShow}
                setShowModal={setShowModal}
              />
            </Popup>
          </UserBox>
        )}
      </Container>

      <Modal
        toggleModal={() => setShowModal(false)}
        isOpen={showModal}
        title="Settings"
      >
        <Settings setShowModal={setShowModal} />
      </Modal>
    </AppBarBox>
  );
};

export default AppBar;
