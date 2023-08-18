import { Formik } from 'formik';
import * as Yup from 'yup';

import { RiLoginBoxFill } from 'react-icons/ri';

import Input from 'components/shared/Input';
import PasswordInput from 'components/shared/Input/PasswordInput';
import Button from 'components/shared/button';

import { passwordRegExp } from 'components/shared/RegExps';
import { FormBox } from 'components/shared/FormBox/FormBox.styled';
import { useLoginMutation } from 'redux/authAPI';
import { useDispatch } from 'react-redux';
import { setAuth } from 'redux/authSlice';
import { setAuthHeader } from 'redux/axiosBaseQuery';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Must be valid email').required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(16, 'Must be max 16 characters')
    .matches(
      passwordRegExp,
      'Must be at least one capital letter and one number'
    )
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();

  const [userFullName, setFullName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async userData => {
    const data = await login(userData);

    const { user, accessToken, refreshToken } = data.data;

    setFullName(user.fullName);

    dispatch(setAuth({ user, accessToken, refreshToken }));
    setAuthHeader(accessToken);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (userFullName && isSuccess) {
      navigate('/');

      Notify.success(`Glad to see You, ${userFullName}!`, {
        position: 'right-bottom',
      });
    }

    if (isError) {
      Notify.failure(error.data.message, {
        position: 'right-bottom',
      });
    }
  }, [error, isError, isSuccess, navigate, userFullName]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, { resetForm }) => {
        const { email, password } = values;

        handleSubmit({
          email: email.trim(),
          password: password.trim(),
        });

        resetForm();
      }}
    >
      <FormBox>
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="example@email.com"
        />

        <PasswordInput id="password" label="Password" placeholder="********" />

        <Button
          icon={RiLoginBoxFill}
          isLoading={isLoading}
          disabled={isLoading}
          type="submit"
        >
          Login
        </Button>
      </FormBox>
    </Formik>
  );
};

export default LoginForm;
