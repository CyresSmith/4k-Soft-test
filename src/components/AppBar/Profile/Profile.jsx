import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import { RiSettings5Line } from 'react-icons/ri';
import { IoMdLogOut } from 'react-icons/io';

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
      Notify.success('Successfully Logout');
    }

    if (isError) {
      Notify.failure(error.message);
    }
  }, [error, isError, isSuccess]);

  const handleSettingsClick = () => {
    setPopUpShow(null);
    setShowModal(true);
  };

  const handleLogoutClick = async () => {
    await logout();
    setPopUpShow(null);
    dispatch(resetAuth());
  };

  return (
    <ProfileBox>
      <User>
        <UserImg src={user.avatarUrl} alt={user.name} />
        <p>
          <UserName>{user.fullName}</UserName>
          <UserEmail>{user.email}</UserEmail>
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
        >
          Logout
        </TextButton>
      </ButtonsBox>
    </ProfileBox>
  );
};

export default Profile;
