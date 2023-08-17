import styled from '@emotion/styled';
import theme from 'theme';

export const PasswordInputBox = styled.div`
  position: relative;
  width: 100%;

  button {
    position: absolute;
    right: ${theme.space[1]};
    top: ${theme.space[1]};
    background-color: transparent;
    color: ${theme.colors.secondary.regular};

    :hover {
      color: ${theme.colors.primary.regular};
    }
  }
`;
