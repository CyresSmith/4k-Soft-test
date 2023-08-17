import styled from '@emotion/styled';
import theme from 'theme';

export const ButtonBox = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${p => (p.color ? p.color : theme.colors.primary.regular)};
  transition: ${theme.transition.primary};
  padding: ${theme.space[1]};
  border-radius: ${theme.radii.m};

  svg {
    margin-right: ${theme.space[2]};
    transition: ${theme.transition.primary};
  }

  :disabled {
    pointer-events: none;
  }

  :hover:not(:disabled) {
    background-color: ${theme.colors.primary.light};

    svg {
      fill: ${theme.colors.primary.regular};
    }

    span {
      color: ${theme.colors.primary.regular};
    }
  }
`;

export const Text = styled.span`
  color: ${p => (p.color ? p.color : theme.colors.black)};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.regular};
  transition: ${theme.transition.primary};
`;
