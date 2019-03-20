import React, { Component } from "react";
import SubCategoryListItem from "../SubCategoryListItem";
import StyledNavigationList from "./style__NavigationList";

import { SubCategoryConsumer } from "../../contexts/SubCategoryContext";

class SubCategoryNavigation extends Component {
  render() {
    return (
      <SubCategoryConsumer>
        {(context) => (
          <nav>
            <StyledNavigationList>
              {context.map((item) => (
                <SubCategoryListItem key={item.id}>
                  {item.name}
                </SubCategoryListItem>
              ))}
            </StyledNavigationList>
          </nav>
        )}
      </SubCategoryConsumer>
    );
  }
}

export default SubCategoryNavigation;
