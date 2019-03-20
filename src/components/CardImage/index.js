import React from "react";
import StyledCardImage from "./style__CardImage";

const CardImage = ({ url, title }) => {
  return <StyledCardImage src={url} alt={title} />;
};

export default CardImage;
