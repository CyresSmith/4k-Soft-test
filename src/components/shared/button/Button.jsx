import { Btn, ButtonText, Loader } from './Button.styled';
import { BiLoaderCircle } from 'react-icons/bi';

const Button = ({
  id,
  isLoading = false,
  disabled = false,
  type = 'button',
  onClick,
  children,
  white = false,
  light = false,
  icon: Icon = null,
  iconSize = 20,
}) => {
  return (
    <Btn
      id={id}
      disabled={disabled}
      white={white}
      light={light}
      type={type}
      onClick={onClick}
    >
      {isLoading && Icon && (
        <Loader>
          <BiLoaderCircle size={iconSize} />
        </Loader>
      )}
      {!isLoading && Icon && <Icon size={iconSize} />}
      <ButtonText isIconThere={Icon}>{children}</ButtonText>
    </Btn>
  );
};

export default Button;
