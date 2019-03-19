import React, { Component } from "react";
import { StyledListItem, StyledNavLink } from "./style__listItem";

class SubCategoryListItem extends Component {
  render() {
    const { children } = this.props;
    return (
      <StyledListItem>
        <StyledNavLink href="#">{children}</StyledNavLink>
      </StyledListItem>
    );
  }
}

export default SubCategoryListItem;
