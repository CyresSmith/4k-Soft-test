import styled from '@emotion/styled';
import { animated } from '@react-spring/web';
import theme from 'theme';

export const PopupBox = styled(animated.div)`
  position: absolute;
  top: calc(100% + ${theme.space[2]});
  right: 0;
  padding: ${theme.space[3]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.radii.l};
  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.08);
  z-index: 2;
  transform-origin: right top;
`;
