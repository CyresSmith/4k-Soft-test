import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import theme from 'theme';

export const UserNav = styled.ul`
  display: flex;
  align-items: center;

  li {
    :not(:last-of-type) {
      margin-right: ${theme.space[1]};
    }
  }
`;

export const Link = styled(NavLink)`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.secondary.bg};
  transition: ${theme.transition.primary};
  display: flex;
  align-items: center;
  padding: ${theme.space[1]} ${theme.space[2]};
  border-radius: 18.5px;

  svg {
    margin-right: ${theme.space[1]};
  }

  :hover {
    color: ${theme.colors.primary.regular};
  }

  &.active {
    color: ${theme.colors.primary.regular};
    background-color: ${theme.colors.secondary.bg};
  }
`;
