import styled from '@emotion/styled';
import { animated } from '@react-spring/web';
import theme from 'theme';

export const Backdrop = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${theme.space[4]};
  padding-top: calc(48px * 2 + 35px);
  background-color: ${theme.colors.white};
  border-radius: ${theme.radii.l};
  box-shadow: ${theme.shadow.primary};

  button[aria-labelledby='close button'] {
    margin-left: auto;
    background-color: transparent;
    color: ${theme.colors.black};

    :hover {
      color: ${theme.colors.primary.regular};
      background-color: ${theme.colors.primary.light};
    }
  }
`;

export const ModalHeader = styled.div`
  position: absolute;
  top: ${theme.space[4]};
  left: ${theme.space[4]};
  width: calc(100% - ${theme.space[4]} * 2);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h5`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.xxxl};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.48px;
`;
