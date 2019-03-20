import styled from "styled-components";
import { colors } from "../../variables";

export const StyledNavigationList = styled.ul`
  margin: 0;
  padding: 0;
  overflow: auto;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  border-block-end: 1px solid ${colors.lightGrey};
`;
