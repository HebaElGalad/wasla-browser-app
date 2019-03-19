import React, { Component } from "react";
import { StyledListItem, StyledNavLink } from "./style__listItem";

class CategoryListItem extends Component {
  render() {
    const { children, className } = this.props;
    return (
      <StyledListItem className={className}>
        <StyledNavLink href="#">{children}</StyledNavLink>
      </StyledListItem>
    );
  }
}

export default CategoryListItem;
