import React, { Component } from "react";
import uuid from "uuid/v4";
import SubCategoryListItem from "../SubCategoryListItem";
import StyledNavigationList from "./style__NavigationList";

const items = ["Quotes", "Funny", "Lifestyle", "Health"];

class SubCategoryNavigation extends Component {
  state = {};
  render() {
    return (
      <nav>
        <StyledNavigationList category={items}>
          {items.map((item) => (
            <SubCategoryListItem key={uuid()}>{item}</SubCategoryListItem>
          ))}
        </StyledNavigationList>
      </nav>
    );
  }
}

export default SubCategoryNavigation;
