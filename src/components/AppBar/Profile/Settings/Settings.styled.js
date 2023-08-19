import styled from '@emotion/styled';
import theme from 'theme';

import { Form } from 'formik';

export const SettingsFormBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.space[4]};

  @media (${theme.mediaBreakpoints.mobile.media}) {
    flex-direction: column;
    justify-content: unset;
    align-items: center;
  }
`;

export const Box = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media (${theme.mediaBreakpoints.mobile.media}) {
    width: 100%;
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc((27px + ${theme.space[2]}) + ${theme.space[3]});
  margin-bottom: ${theme.space[4]};

  @media (${theme.mediaBreakpoints.mobile.media}) {
    width: 100%;
  }
  @media ${theme.mediaBreakpoints.tablet.media} {
    width: 370px;
  }
  @media ${theme.mediaBreakpoints.desktop.media} {
    width: 370px;
  }

  input[id='name'] {
    margin-top: calc(27px + ${theme.space[2]});
  }
`;

export const PasswordBox = styled.div`
  display: flex;
  gap: ${theme.space[3]};

  p {
    flex: 50%;
  }
`;
