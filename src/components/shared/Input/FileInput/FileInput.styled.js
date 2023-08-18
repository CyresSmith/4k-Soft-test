import styled from '@emotion/styled';
import theme from 'theme';

export const FileInputLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${p => (p.color ? p.color : theme.colors.primary.regular)};
  transition: ${theme.transition.primary};
  padding: ${theme.space[1]} ${theme.space[2]};
  border-radius: 19.5px;

  svg {
    margin-right: ${theme.space[2]};
    transition: ${theme.transition.primary};
    color: ${p => (p.color ? p.color : theme.colors.black)};
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

export const Input = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const Text = styled.span`
  color: ${p => (p.color ? p.color : theme.colors.black)};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.regular};
  transition: ${theme.transition.primary};
`;
