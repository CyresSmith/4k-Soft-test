import Container from 'components/shared/Container/Container';
import { Section } from 'components/shared/Section/Section.styled';
import Students from 'components/Students';

const Home = () => {
  return (
    <Section>
      <Container>
        <Students />
      </Container>
    </Section>
  );
};

export default Home;
