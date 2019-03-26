import React, { Component } from "react";
import CategoryListItem from "../CategotyListItem";
import {
  StyledNavigationList,
  StyledNavigation
} from "./style__NavigationList";
import AddCategoryButton from "../AddCategoryButton";

import { CategoriesConsumer } from "../../contexts/CategoriesContext";

class CategoryNavigation extends Component {
  render() {
    return (
      <CategoriesConsumer>
        {(context) => (
          <StyledNavigation>
            <StyledNavigationList>
              {context.categories.map((category) => (
                <CategoryListItem key={category.id}>
                  {category.name}
                </CategoryListItem>
              ))}
            </StyledNavigationList>
            <AddCategoryButton />
          </StyledNavigation>
        )}
      </CategoriesConsumer>
    );
  }
}

export default CategoryNavigation;
