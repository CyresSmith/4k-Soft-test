import styled from '@emotion/styled';
import { Form } from 'formik';

import theme from 'theme';

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 60px;

  @media (${theme.mediaBreakpoints.mobile.media}) {
    width: 100%;
  }
  @media ${theme.mediaBreakpoints.tablet.media} {
    width: 350px;
  }
  @media ${theme.mediaBreakpoints.desktop.media} {
    width: 500px;
  }
`;
