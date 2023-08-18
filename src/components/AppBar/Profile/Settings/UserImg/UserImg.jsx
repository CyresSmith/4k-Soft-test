import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';

import { MdOutlineAddAPhoto, MdOutlineDoneOutline } from 'react-icons/md';

import { useUpdateAvatarMutation } from 'redux/authAPI';

import FileInput from 'components/shared/Input/FileInput';
import TextButton from 'components/shared/button/TextButton';
import { UserImg, UserImgBox } from './UserImg.styled';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/authSlice';

const UserImgChange = ({
  user,
  avatarUrl = '',
  fullName = '',
  setShowModal,
}) => {
  const [imgChanged, setImgChanged] = useState(false);
  const [newAvatar, setNewAvatar] = useState(false);

  const [updateAvatar, { isLoading, isSuccess, isError, error }] =
    useUpdateAvatarMutation();

  const dispatch = useDispatch();

  const loadImg = e => {
    setNewAvatar(e.target.files[0]);
    setImgChanged(true);
  };

  const updateImg = async () => {
    const formData = new FormData();
    formData.append('avatar', newAvatar);

    const { data } = await updateAvatar(formData);

    dispatch(setUser({ ...user, avatarUrl: data.avatarUrl }));

    setImgChanged(false);
  };

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Avatar successfully updated', {
        showOnlyTheLastOne: true,
        position: 'right-bottom',
      });
      setShowModal(false);
    }

    if (isError) {
      Notify.failure(error.data.message, {
        showOnlyTheLastOne: true,
        position: 'right-bottom',
      });
    }
  }, [error, isError, isSuccess, setShowModal]);

  return (
    <UserImgBox>
      <UserImg
        src={!newAvatar ? avatarUrl : URL.createObjectURL(newAvatar)}
        alt={fullName}
      />
      {!imgChanged ? (
        <FileInput
          id="avatarUrl"
          name="avatarUrl"
          label="Change photo"
          onChange={loadImg}
          isLoading={isLoading}
          icon={MdOutlineAddAPhoto}
        />
      ) : (
        <TextButton
          onClick={updateImg}
          icon={MdOutlineDoneOutline}
          isLoading={isLoading}
          iconSize={20}
        >
          Confirm
        </TextButton>
      )}
    </UserImgBox>
  );
};

export default UserImgChange;
