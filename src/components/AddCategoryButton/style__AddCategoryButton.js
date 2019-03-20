import styled from "styled-components";
import { colors } from "../../variables";

const StyledButton = styled.button`
  display: inline-flex;
  padding: 12px 16px;
  color: inherit;
  background: ${colors.textWhite};
  border: 1px solid ${colors.lightGrey};
  border-block-start: 0;
  border-block-end: 0;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  &:hover {
    color: ${colors.textWhite};
    background: ${colors.primary};
    border-color: ${colors.primary};
  }
  @media (max-width: 479px) {
    padding: 12px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export default StyledButton;
