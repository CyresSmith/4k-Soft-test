import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import theme from 'theme';

export const LogoBox = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.span`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.background};
  margin-left: ${theme.space[2]};
`;
