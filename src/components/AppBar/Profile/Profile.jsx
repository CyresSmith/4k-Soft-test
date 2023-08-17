import { RiSettings5Line } from 'react-icons/ri';
import { IoMdLogOut } from 'react-icons/io';

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

const Profile = ({ user, setPopUpShow }) => {
  const handleSettingsClick = () => {
    setPopUpShow(null);
  };

  const handleLogoutClick = () => {
    setPopUpShow(null);
  };

  return (
    <ProfileBox>
      <User>
        <UserImg src={user.img} alt={user.name} />
        <p>
          <UserName>{user.name}</UserName>
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
