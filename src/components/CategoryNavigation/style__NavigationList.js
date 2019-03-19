import styled from "styled-components";
import { colors } from "../../variables";

const StyledNavigationList = styled.ul`
  margin: 0;
  padding: 0;
  border-block-end: 1px solid ${colors.lightGrey};
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

export default StyledNavigationList;
