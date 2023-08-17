import styled from '@emotion/styled';
import theme from 'theme';

export const TitleText = styled.p`
  font-size: ${p => theme.fontSizes[p.size]};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.l};
  text-align: ${p => p.align};
`;
