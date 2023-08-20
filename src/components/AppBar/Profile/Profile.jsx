import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import { RiSettings5Line } from 'react-icons/ri';
import { IoMdLogOut } from 'react-icons/io';

import { textSlice } from 'helpers/helpers';

import { useLogoutMutation } from 'redux/authAPI';
import { resetAuth } from 'redux/authSlice';

import {
  ProfileBox,
  UserImg,
  User,
  UserName,
  UserEmail,
  ButtonsBox,
} from './Profile.styled';

import TextButton from 'components/shared/button/TextButton';

import theme from 'theme';

const Profile = ({ user, setPopUpShow, setShowModal }) => {
  const dispatch = useDispatch();

  const [logout, { isError, isLoading, isSuccess, error }] =
    useLogoutMutation();

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Successfully Logout', {
        position: 'right-bottom',
      });
      setPopUpShow(null);
    }

    if (isError) {
      Notify.failure(error.message, {
        position: 'right-bottom',
      });
    }
  }, [error, isError, isSuccess, setPopUpShow]);

  const handleSettingsClick = () => {
    setPopUpShow(null);
    setShowModal(true);
  };

  const handleLogoutClick = async () => {
    await logout();
    dispatch(resetAuth());
  };

  return (
    <ProfileBox>
      <User>
        <UserImg src={user.avatarUrl} alt={user.name} />
        <p>
          <UserName>{textSlice(user.fullName, 18)}</UserName>
          <UserEmail>{textSlice(user.email, 18)}</UserEmail>
        </p>
      </User>
      <ButtonsBox>
        <TextButton
          iconSize={20}
          icon={RiSettings5Line}
          color={theme.colors.black}
          onClick={handleSettingsClick}
        >
          Settings
        </TextButton>

        <TextButton
          iconSize={20}
          icon={IoMdLogOut}
          color={theme.colors.black}
          onClick={handleLogoutClick}
          id="logout"
          isLoading={isLoading}
        >
          Logout
        </TextButton>
      </ButtonsBox>
    </ProfileBox>
  );
};

export default Profile;
