import React, { Component } from "react";
import { StyledListItem, StyledNavLink } from "./style__listItem";

import { SelectSubCategoryConsumer } from "../../contexts/SelectSubCategoryContext";

class SubCategoryListItem extends Component {
  render() {
    const { children } = this.props;
    return (
      <SelectSubCategoryConsumer>
        {(context) => (
          <StyledListItem>
            <StyledNavLink href="#" onClick={context.handelClick}>
              {children}
            </StyledNavLink>
          </StyledListItem>
        )}
      </SelectSubCategoryConsumer>
    );
  }
}

export default SubCategoryListItem;
