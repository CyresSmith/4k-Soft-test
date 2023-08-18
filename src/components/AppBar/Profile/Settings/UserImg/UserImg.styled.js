import styled from '@emotion/styled';
import theme from 'theme';

export const UserImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
`;

export const UserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: ${theme.radii.round};
  margin-bottom: ${theme.space[3]};
  object-fit: cover;
`;
