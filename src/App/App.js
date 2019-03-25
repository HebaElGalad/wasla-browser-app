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
class App extends Component {
  state = {
    categories: [],
    subCategory: [],
    news: [],
    country: "eg",
    selectSubCategory: "",
    page: 1,
    hasMore: true,
    isLoading: true
  };

  loadCategories = () => {
    axios
      .get("https://api.myjson.com/bins/qk7qi")
      .then((response) => {
        // console.log(response.data);
        this.setState({
          categories: response.data
        });
      })
      .catch((error) => console.log(error));
  };

  loadSubCategories = () => {
    axios
      .get("https://api.myjson.com/bins/6frhm?cat=1")
      .then((response) => {
        // console.log(response.data);
        this.setState({
          subCategory: response.data
        });
      })
      .catch((error) => console.log(error));
  };

  loadArticles = () => {
    const { country, selectSubCategory, page, news } = this.state;
    axios
      .get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: country,
          category: selectSubCategory ? selectSubCategory : "sports",
          page: page,
          apiKey: "8e873620e5d8423aae1ed3d8d839e3e6"
        }
      })
      .then((response) => {
        // console.log("loadArticles:", response.data);
        this.setState({
          isLoading: false,
          hasMore: news.length < response.data.totalResults,
          news: [
            ...news,
            ...response.data.articles.map((article) => ({
              title: article.title,
              name: article.source.name,
              url: article.url,
              time: article.publishedAt,
              image: article.urlToImage
            }))
          ]
        });
      });
    // .catch((error) => console.log(error));
  };

  loadMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
        isLoading: true
      }),
      () => this.loadArticles()
    );
  };

  handelScroll = (e) => {
    const { isLoading, hasMore } = this.state;
    if (isLoading || !hasMore) return;

    const pageOffset = window.innerHeight + document.documentElement.scrollTop;
    const lastElementOffset = document.documentElement.offsetHeight;
    // To start scroll before the last 50px from the bottom
    const bottomOffset = 50;

    if (pageOffset > lastElementOffset - bottomOffset) {
      this.loadMore();
    }
  };

  handelClick = (e) => {
    this.setState( ({
        selectSubCategory: $(e.target).text(),
        isLoading: true,
        news: []
      }),
      () => this.loadArticles()
    );
  };

  componentDidMount() {
    this.loadCategories();

    this.loadSubCategories();

    this.loadArticles();

    this.scrollListener = window.addEventListener("scroll", (e) => {
      this.handelScroll(e);
    });
  }

  // componentWillMount() {
  // }

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
