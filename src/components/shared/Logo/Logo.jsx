import { BsShop } from 'react-icons/bs';

import useMediaHook from 'hooks/useMediaHook';

import { LogoBox, LogoText } from './Logo.styled';
import theme from 'theme';

const Logo = () => {
  const { MediaType } = useMediaHook();

  return (
    <LogoBox to={'/'}>
      <BsShop
        size={MediaType === 'mobile' ? 32 : 52}
        color={theme.colors.background}
      />
      {MediaType !== 'mobile' && <LogoText>Shopping</LogoText>}
    </LogoBox>
  );
};

export default Logo;
