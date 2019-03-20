import styled from "styled-components";
import { colors } from "../../variables";

const StyledCardWrapper = styled.div`
  border-block-end: 5px solid ${colors.lightGrey};
  padding: 0 32px;
  @media (max-width: 479px) {
    padding: 0 16px;
  }
`;

export default StyledCardWrapper;
