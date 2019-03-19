import styled from "styled-components";
import { colors } from "../../variables";

const StyledNavigationList = styled.ul`
  margin: 0;
  padding: 12px 8px;
  border-block-end: 5px solid ${colors.lightGrey};
  overflow: auto;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default StyledNavigationList;
