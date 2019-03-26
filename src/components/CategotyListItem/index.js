import React, { Component } from "react";
import { StyledListItem, StyledNavLink } from "./style__listItem";
import { CategoriesConsumer } from "../../contexts/CategoriesContext";

class CategoryListItem extends Component {
  render() {
    const { children } = this.props;
    return (
      <CategoriesConsumer>
        {(context) => (
          <StyledListItem>
            <StyledNavLink href="#" onClick={context.selectCategory}>
              {children}
            </StyledNavLink>
          </StyledListItem>
        )}
      </CategoriesConsumer>
    );
  }
}

export default CategoryListItem;
