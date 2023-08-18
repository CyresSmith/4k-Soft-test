import styled from '@emotion/styled';
import theme from 'theme';

export const AppBarBox = styled.header`
  width: 100%;
  padding: ${theme.space[3]} 0;
  background-color: ${theme.colors.secondary.dark};

  div[id='appBarContainer'] {
    min-height: 52px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
`;

export const UserBox = styled.div`
  position: relative;
`;

export const UserAvatar = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  cursor: pointer;
`;
