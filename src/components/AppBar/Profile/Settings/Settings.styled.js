import styled from '@emotion/styled';
import theme from 'theme';

import { Form } from 'formik';

export const SettingsFormBox = styled(Form)`
  width: 545px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.space[4]};
`;

export const FormBox = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: calc((27px + ${theme.space[2]}) + ${theme.space[3]});

  input[id='name'] {
    margin-top: calc(27px + ${theme.space[2]});
  }
`;

export const UserImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    span {
      color: ${theme.colors.primary.regular};
      font-size: ${theme.fontSizes.l};
      line-height: ${theme.lineHeights.m};
    }
  }
`;

export const UserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: ${theme.radii.round};
  margin-bottom: ${theme.space[2]};
`;

export const PasswordBox = styled.div`
  display: flex;
  gap: ${theme.space[3]};

  p {
    flex: 50%;
  }
`;
