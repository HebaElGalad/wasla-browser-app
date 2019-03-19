import React, { Component } from "react";
import StyledCardImage from "./style__CardImage";

class CardImage extends Component {
  render() {
    const { url, title } = this.props;
    return <StyledCardImage src={url} alt={title} />;
  }
}

export default CardImage;
