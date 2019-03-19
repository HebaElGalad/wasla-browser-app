import styled from "styled-components";
import { colors } from "../../variables";

export const StyledListItem = styled.li`
  display: inline-block;
  list-style: none;
  padding: 6px 30px;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.textWhite};
  background: linear-gradient(
    to right,
    ${colors.primary},
    ${colors.primaryDark}
  );
  border-radius: 30px;
  & + li {
    margin-inline-start: 24px;
  }
  @media (max-width: 767px) {
    & + li {
      margin-inline-start: 18px;
    }
  }
`;

export const StyledNavLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #000;
  }
`;
