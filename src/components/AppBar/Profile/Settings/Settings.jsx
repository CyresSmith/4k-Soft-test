import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { getAuth } from 'redux/selectors';

import Input from 'components/shared/Input';
import PasswordInput from 'components/shared/Input/PasswordInput';
import TextButton from 'components/shared/button/TextButton';
import Button from 'components/shared/button/Button';

import {
  Box,
  FormBox,
  SettingsFormBox,
  UserImg,
  UserImgBox,
} from './Settings.styled';

import { passwordRegExp } from 'components/shared/RegExps';
import { useUpdateUserDataMutation } from 'redux/authAPI';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import { setUser } from 'redux/authSlice';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be max 20 characters'),
  email: Yup.string().email('Must be valid email'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(16, 'Must be max 16 characters')
    .matches(
      passwordRegExp,
      'Must be at least one capital letter and one number'
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match!'
  ),
});

const Settings = () => {
  const { user } = useSelector(getAuth);

  const [userData, setUserData] = useState({
    fullName: user.fullName,
    email: user.email,
    password: '',
    confirmPassword: '',
  });

  const initialValues = {
    fullName: userData.fullName,
    email: userData.email,
    password: '',
    confirmPassword: '',
  };

  const dispatch = useDispatch();

  const [updateUserData, { isLoading, isSuccess, isError, error }] =
    useUpdateUserDataMutation();

  const handleSubmit = async data => {
    const { data: userData } = await updateUserData(data);
    dispatch(setUser(userData.user));
  };

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Data successfully updated', {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
    }

    if (isError) {
      Notify.failure(error.data.message, {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
    }
  }, [error, isError, isSuccess]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, { resetForm }) => {
        const userData = values => {
          const { confirmPassword, password, ...data } = values;

          if (password === '') return data;

          return { ...data, password };
        };

        handleSubmit(userData(values));
        resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
        <SettingsFormBox>
          <Box>
            <UserImgBox>
              <UserImg src={user.avatarUrl} />
              <TextButton>Change photo</TextButton>
            </UserImgBox>
            <FormBox>
              <Input
                type="fullName"
                label="Full name"
                placeholder="First & Last name"
                id="fullName"
                onChange={e => {
                  setFieldValue('fullName', e.target.value);
                  setUserData(prev => ({ ...prev, fullName: e.target.value }));
                }}
                value={userData.fullName}
              />

              <Input
                type="email"
                id="email"
                label="Email"
                placeholder="example@email.com"
                onChange={e => {
                  setFieldValue('email', e.target.value);
                  setUserData(prev => ({ ...prev, email: e.target.value }));
                }}
                value={userData.email}
              />

              <PasswordInput
                id="password"
                label="Password"
                placeholder="********"
                onChange={e => {
                  setUserData(prev => ({ ...prev, password: e.target.value }));
                  setFieldValue('password', e.target.value);
                }}
                value={userData.password}
              />
              <PasswordInput
                id="confirmPassword"
                label="Confirm password"
                placeholder="********"
                onChange={e => {
                  setUserData(prev => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }));
                  setFieldValue('confirmPassword', e.target.value);
                }}
                value={userData.confirmPassword}
              />
            </FormBox>
          </Box>
          <Button type="submit" isLoading={isLoading} disabled={isLoading}>
            Save Changes
          </Button>
        </SettingsFormBox>
      )}
    </Formik>
  );
};

export default Settings;
