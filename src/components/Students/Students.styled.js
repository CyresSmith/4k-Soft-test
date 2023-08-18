import styled from '@emotion/styled';
import theme from 'theme';

export const TableBox = styled.div`
  overflow: hidden;
  border-radius: ${theme.radii.l};
  margin-top: ${theme.space[2]};
  :first-of-type {
    margin-bottom: ${theme.space[4]};
  }
`;

export const StudentsTable = styled.table`
  font-size: ${theme.fontSizes.m};
  border-collapse: collapse;
  text-align: center;
  color: ${theme.colors.primary.hover};

  th,
  td:first-of-type {
    background: ${theme.colors.primary.hover};
    color: ${theme.colors.white};
    padding: ${theme.space[1]} ${theme.space[3]};
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

export const Student = styled.span`
  display: flex;
  gap: ${theme.space[2]};
`;
