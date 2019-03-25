import styled from "styled-components";
import { colors } from "../../variables";

export const StyledCardWrapper = styled.div`
  border-block-end: 5px solid ${colors.lightGrey};
  padding: 0 32px;
  @media (max-width: 479px) {
    padding: 0 16px;
  }
`;

export const StyledCardBody = styled.div`
  /* position: relative;
  overflow: hidden;
  height: 290px;
  @media (max-width: 400px) {
    height: 190px;
  }
  & img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  } */
`;
