import { ContainerBox } from './Conteiner.styled';

const Container = ({ children, id = null }) => {
  return <ContainerBox id={id}>{children}</ContainerBox>;
};

export default Container;
