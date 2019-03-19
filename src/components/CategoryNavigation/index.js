import React, { Component } from "react";
import uuid from "uuid/v4";
import CategoryListItem from "../CategotyListItem";
import StyledNavigationList from "./style__NavigationList";

const items = ["Trending", "Videos", "News & Politics", "Business"];

class CategoryNavigation extends Component {
  render() {
    return (
      <nav>
        <StyledNavigationList category={items}>
          {items.map((item) => (
            <CategoryListItem key={uuid()} className="active">
              {item}
            </CategoryListItem>
          ))}
        </StyledNavigationList>
      </nav>
    );
  }
}

export default CategoryNavigation;
