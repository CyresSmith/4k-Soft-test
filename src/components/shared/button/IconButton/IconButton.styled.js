import styled from '@emotion/styled';
import theme from 'theme';

const StyledButton = styled('button')`
  display: inline-flex;
  padding: ${theme.space[1]};
  color: ${p => p.color};
  background-color: ${p =>
    p.disabled ? theme.colors.secondary.light : theme.colors.secondary.dark};
  cursor: pointer;
  border: none;
  border-radius: ${p => (p.round ? '50%' : theme.radii.m)};
  transition: ${theme.transition.primary};
  transform-origin: center;

  :disabled {
    pointer-events: none;
  }

  :hover:not(:disabled) {
    background-color: ${theme.colors.secondary.hover};
  }
`;

export default StyledButton;
