import { BiLoaderCircle } from 'react-icons/bi';

import { ButtonBox, Text } from './TextButton.styled';
import { Loader } from '../Button.styled';

const TextButton = ({
  id = null,
  color = null,
  icon: Icon,
  iconSize = 34,
  children,
  onClick = null,
  isLoading = false,
}) => {
  return (
    <ButtonBox id={id} color={color} onClick={onClick}>
      {isLoading && Icon && (
        <Loader>
          <BiLoaderCircle size={iconSize} />
        </Loader>
      )}
      {!isLoading && Icon && <Icon size={iconSize} color={color} />}
      <Text color={color}>{children}</Text>
    </ButtonBox>
  );
};

export default TextButton;
