import LoginForm from 'components/Login/LoginForm/LoginForm';
import Container from 'components/shared/Container/Container';
import { Section } from 'components/shared/Section/Section.styled';
import Title from 'components/shared/Title/Title';

const Login = () => {
  return (
    <Container>
      <Section>
        <Title>Pleas enter your login details</Title>
        <LoginForm />
      </Section>
    </Container>
  );
};

export default Login;
