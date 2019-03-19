import React, { Component } from "react";
import { StyledCardHeader, StyledLink } from "./style__CardHeader";

class CardHeader extends Component {
  render() {
    const { title, url } = this.props;
    return (
      <header>
        <StyledCardHeader>
          <StyledLink href={url}>{title}</StyledLink>
        </StyledCardHeader>
      </header>
    );
  }
}

export default CardHeader;
