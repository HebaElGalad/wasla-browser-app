import styled from "styled-components";
import { colors } from "../../variables";

export const StyledCardHeader = styled.h1`
  font-size: 20px;
  font-weight: 600;
  text-align: right;
  padding: 0 16px;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
`;
