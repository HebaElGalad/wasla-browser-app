import React from "react";
import { StyledCardHeader, StyledLink } from "./style__CardHeader";

const CardHeader = ({ title, url }) => {
  return (
    <StyledCardHeader>
      <StyledLink href={url}>{title}</StyledLink>
    </StyledCardHeader>
  );
};

export default CardHeader;
