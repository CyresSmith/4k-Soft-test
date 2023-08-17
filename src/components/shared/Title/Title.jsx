import { TitleText } from './Title.styled';

const Title = ({ as = 'h1', size = 'xxxl', align = 'center', children }) => {
  return (
    <TitleText as={as} size={size} align={align}>
      {children}
    </TitleText>
  );
};

export default Title;
