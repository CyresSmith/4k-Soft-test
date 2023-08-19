import styled from '@emotion/styled';

import theme from 'theme';

export const ContainerBox = styled.div`
  /* width: ${theme.mediaBreakpoints.desktop.width}; */
  height: 100%;
  padding: 0 ${theme.space[3]};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${theme.mediaBreakpoints.mobile.media}) {
    min-width: ${theme.mediaBreakpoints.mobile.width};
  }
  @media ${theme.mediaBreakpoints.tablet.media} {
    padding: 0 30px;
    width: ${theme.mediaBreakpoints.tablet.width};
  }
  @media ${theme.mediaBreakpoints.desktop.media} {
    padding: 0 15px;
    width: ${theme.mediaBreakpoints.desktop.width};
  }
`;
