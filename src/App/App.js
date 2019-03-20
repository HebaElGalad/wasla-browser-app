import React, { Component } from "react";
import CategoryNavigation from "../components/CategoryNavigation";
import SubCategoryNavigation from "../components/SubCategoryNavigation";
import Card from "../components/Card";

import $ from "jquery";
import axios from "axios";

import { CategoriesProvider } from "../contexts/CategoriesContext";
import { SubCategoryProvider } from "../contexts/SubCategoryContext";
import { NewsProvider } from "../contexts/NewsContext";
import { SelectSubCategoryProvider } from "../contexts/SelectSubCategoryContext";

// import api from "../utils/api";

class App extends Component {
  state = {
    categories: [],
    subCategory: [],
    news: [],
    country: "eg",
    selectSubCategory: ""
  };

  handelClick = (e) => {
    e.preventDefault();
    console.log($(e.target).text());
    this.setState({
      selectSubCategory: $(e.target).text()
    });
    console.log(this.state);
    axios
      .get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: this.state.country,
          category: this.state.selectSubCategory,
          page: 1,
          apiKey: "8e873620e5d8423aae1ed3d8d839e3e6"
        }
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          news: response.data.articles
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    const { country, selectSubCategory } = this.state;
    axios
      .get("https://api.myjson.com/bins/qk7qi")
      .then((response) => {
        console.log(response.data);
        this.setState({
          categories: response.data
        });
      })
      .catch((error) => console.log(error));

    axios
      .get("https://api.myjson.com/bins/6frhm?cat=1")
      .then((response) => {
        console.log(response.data);
        this.setState({
          subCategory: response.data
        });
      })
      .catch((error) => console.log(error));

    axios
      .get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: country,
          category: selectSubCategory ? selectSubCategory : "sports",
          page: 1,
          apiKey: "8e873620e5d8423aae1ed3d8d839e3e6"
        }
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          news: response.data.articles
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { categories, subCategory, news } = this.state;
    return (
      <CategoriesProvider value={categories}>
        <div className="App">
          <CategoryNavigation />
          <SubCategoryProvider value={subCategory}>
            <SelectSubCategoryProvider
              value={{ handelClick: this.handelClick }}>
              <SubCategoryNavigation />
            </SelectSubCategoryProvider>
          </SubCategoryProvider>
          <NewsProvider value={news}>
            <Card />
          </NewsProvider>
        </div>
      </CategoriesProvider>
    );
  }
}

export default App;
