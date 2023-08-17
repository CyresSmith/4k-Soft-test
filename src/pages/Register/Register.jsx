import RegisterForm from 'components/Register/RegisterForm';
import Container from 'components/shared/Container';
import { Section } from 'components/shared/Section/Section.styled';
import Title from 'components/shared/Title';

const Register = () => {
  return (
    <Container>
      <Section>
        <Title>Pleas enter your registration details</Title>
        <RegisterForm />
      </Section>
    </Container>
  );
};

export default Register;
