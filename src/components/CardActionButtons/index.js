import React, { Component } from "react";
import {
  StyledActionList,
  StyledActionItem,
  StyledNavLink
} from "./style__CardActionButtons";

class CardActionButtons extends Component {
  render() {
    return (
      <StyledActionList>
        <StyledActionItem className="save">
          <StyledNavLink href="#">Save</StyledNavLink>
        </StyledActionItem>
        <StyledActionItem className="share">
          <StyledNavLink href="#">Share</StyledNavLink>
        </StyledActionItem>
      </StyledActionList>
    );
  }
}

export default CardActionButtons;
