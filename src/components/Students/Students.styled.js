import styled from '@emotion/styled';
import theme from 'theme';

export const TableBox = styled.div`
  overflow: hidden;
  border-radius: ${theme.radii.l};
  margin-top: ${theme.space[2]};
  :first-of-type {
    margin-bottom: ${theme.space[4]};
  }

  @media (${theme.mediaBreakpoints.mobile.media}) {
    border-radius: ${theme.radii.m};
  }
`;

export const StudentsTable = styled.table`
  border-collapse: collapse;
  text-align: center;
  color: ${theme.colors.primary.hover};

  @media (${theme.mediaBreakpoints.mobile.media}) {
    font-size: ${theme.fontSizes.s};
  }
  @media ${theme.mediaBreakpoints.tablet.media} {
    font-size: ${theme.fontSizes.m};
  }
  @media ${theme.mediaBreakpoints.desktop.media} {
    font-size: ${theme.fontSizes.m};
  }

  th,
  td:first-of-type {
    background: ${theme.colors.primary.hover};
    color: ${theme.colors.white};

    @media (${theme.mediaBreakpoints.mobile.media}) {
      padding: ${theme.space[1]} ${theme.space[2]};
    }
    @media ${theme.mediaBreakpoints.tablet.media} {
      padding: ${theme.space[1]} ${theme.space[3]};
    }
    @media ${theme.mediaBreakpoints.desktop.media} {
      padding: ${theme.space[1]} ${theme.space[3]};
    }
  }

  th,
  td {
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: ${theme.colors.secondary.bg};
  }
  td {
    background: ${theme.colors.secondary.light};
  }
  th:first-of-type,
  td:first-of-type {
    text-align: center;
  }
`;
