import { ImUserPlus } from 'react-icons/im';
import { RiLoginBoxFill } from 'react-icons/ri';

import useMediaHook from 'hooks/useMediaHook';

import { UserNav, Link } from './UserNavigation.styled';

const UserNavigation = () => {
  const { MediaType } = useMediaHook();

  return (
    <UserNav>
      <li>
        <Link to="/login">
          <RiLoginBoxFill size={MediaType === 'mobile' ? 32 : 20} />
          {MediaType !== 'mobile' && <span>Login</span>}
        </Link>
      </li>
      <li>
        <Link to="/register">
          <ImUserPlus size={MediaType === 'mobile' ? 32 : 20} />
          {MediaType !== 'mobile' && <span>Registration</span>}
        </Link>
      </li>
    </UserNav>
  );
};

export default UserNavigation;
