import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { ImUserPlus } from 'react-icons/im';

import { useRegisterMutation } from 'redux/authAPI';

import Input from 'components/shared/Input';
import PasswordInput from 'components/shared/Input/PasswordInput';
import Button from 'components/shared/button';

import { passwordRegExp } from 'components/shared/RegExps';
import { FormBox } from 'components/shared/FormBox/FormBox.styled';
import { useEffect } from 'react';
import { Notify } from 'notiflix';

const ValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be max 20 characters')
    .required('Required'),
  email: Yup.string().email('Must be valid email').required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(16, 'Must be max 16 characters')
    .matches(
      passwordRegExp,
      'Must be at least one capital letter and one number'
    )
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match!')
    .required('Required'),
});

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [register, { isLoading, isSuccess, isError, error }] =
    useRegisterMutation();

  const navigate = useNavigate();

  const handleSubmit = async data => {
    await register(data);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/');

      Notify.success(
        'Registration was success! Verification email sent on your email. Please confirm!',
        {
          position: 'right-bottom',
        }
      );
    }

    if (isError) {
      Notify.failure(error.data.message, {
        position: 'right-bottom',
      });
    }
  }, [error, isError, isSuccess, navigate]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, { resetForm }) => {
        const { fullName, email, password } = values;

        handleSubmit({
          fullName: fullName.trim(),
          email: email.trim(),
          password: password.trim(),
        });

        // resetForm();
      }}
    >
      <FormBox>
        <Input
          type="text"
          id="fullName"
          label="Full name"
          placeholder="First & Last name"
        />

        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="example@email.com"
        />

        <PasswordInput id="password" label="Password" placeholder="********" />

        <PasswordInput
          id="confirmPassword"
          label="Confirm password"
          placeholder="********"
        />

        <Button
          icon={ImUserPlus}
          disabled={isLoading}
          isLoading={isLoading}
          type="submit"
        >
          Register
        </Button>
      </FormBox>
    </Formik>
  );
};

export default RegisterForm;
