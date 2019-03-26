import styled from "styled-components";
import { colors } from "../../variables";

export const StyledListItem = styled.li`
  display: inline-block;
  list-style: none;
  color: inherit;
  padding: 8px 16px;
  font-weight: 700;
  & + li {
    margin-inline-start: 12px;
  }
  &.active {
    border-block-end: 2px solid ${colors.primary};
  }
`;

export const StyledNavLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${colors.primary};
  }
`;
