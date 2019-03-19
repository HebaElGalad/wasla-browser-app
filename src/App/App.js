import React, { Component } from "react";
import CategoryNavigation from "../components/CategoryNavigation";
import SubCategoryNavigation from "../components/SubCategoryNavigation";
import Card from "../components/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CategoryNavigation />
        <SubCategoryNavigation />
        <Card />
      </div>
    );
  }
}

export default App;
