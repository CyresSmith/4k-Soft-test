import { Formik } from 'formik';
import * as Yup from 'yup';

import { FaUserPlus } from 'react-icons/fa';

import Input from 'components/shared/Input';
import PasswordInput from 'components/shared/Input/PasswordInput';
import Button from 'components/shared/button';

import { passwordRegExp } from 'components/shared/RegExps';
import { FormBox } from 'components/shared/FormBox/FormBox.styled';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
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
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const handleSubmit = async data => {
    console.log(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, { resetForm }) => {
        const { name, email, password } = values;

        handleSubmit({
          name: name.trim(),
          email: email.trim(),
          password: password.trim(),
        });

        resetForm();
      }}
    >
      <FormBox>
        <Input type="text" id="name" label="Name" placeholder="Name" />

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

        <Button icon={FaUserPlus} type="submit">
          Register
        </Button>
      </FormBox>
    </Formik>
  );
};

export default RegisterForm;
