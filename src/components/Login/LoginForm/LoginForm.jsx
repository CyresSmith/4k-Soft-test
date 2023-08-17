import { Formik } from 'formik';
import * as Yup from 'yup';

import { IoMdLogIn } from 'react-icons/io';

import Input from 'components/shared/Input';
import PasswordInput from 'components/shared/Input/PasswordInput';
import Button from 'components/shared/button';

import { passwordRegExp } from 'components/shared/RegExps';
import { FormBox } from 'components/shared/FormBox/FormBox.styled';

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
  const handleSubmit = async data => {
    console.log(data);
  };

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

        <Button icon={IoMdLogIn} type="submit">
          Login
        </Button>
      </FormBox>
    </Formik>
  );
};

export default LoginForm;
