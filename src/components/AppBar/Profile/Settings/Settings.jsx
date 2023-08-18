import { useSelector } from 'react-redux';
import { SettingsFormBox } from './Settings.styled';
import SettingsForm from './SettingsForm/SettingsForm';
import UserImgChange from './UserImg/UserImg';
import { getUser } from 'redux/selectors';

const Settings = ({ setShowModal }) => {
  const user = useSelector(getUser);

  return (
    <SettingsFormBox>
      <UserImgChange
        fullname={user.fullname}
        avatarUrl={user.avatarUrl}
        setShowModal={setShowModal}
        user={user}
      />
      <SettingsForm setShowModal={setShowModal} user={user} />
    </SettingsFormBox>
  );
};

export default Settings;
