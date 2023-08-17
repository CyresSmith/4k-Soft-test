import styled from '@emotion/styled';

import theme from 'theme';

export const ContainerBox = styled.div`
  width: ${theme.mediaBreakpoints.desktop.width};
  height: 100%;
  padding: 0 ${theme.space[3]};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
