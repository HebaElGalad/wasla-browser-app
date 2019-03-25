import styled from "styled-components";

const StyledCardImage = styled.img`
  width: auto;
  max-height: 350px;
  display: block;
  margin-inline-start: auto;
  margin-inline-end: auto;
  @media (max-width: 400px) {
    width: 100%;
    max-height: 190px;
  }
`;

export default StyledCardImage;
