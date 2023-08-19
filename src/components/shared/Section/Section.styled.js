import styled from '@emotion/styled';
import theme from 'theme';

export const Section = styled.section`
  margin: ${theme.space[4]} 0;

  @media (${theme.mediaBreakpoints.mobile.media}) {
    overflow-y: auto;
  }
  @media ${theme.mediaBreakpoints.tablet.media} {
    overflow-y: auto;
  }
`;
