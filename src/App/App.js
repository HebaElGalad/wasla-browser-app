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
    categories: [
      {
        id: 1,
        name: "News"
      }
    ],
    subCategory: [
      {
        id: 1,
        name: "General"
      },
      {
        id: 2,
        name: "Technology"
      },
      {
        id: 3,
        name: "Lifestyle"
      },
      {
        id: 4,
        name: "Quotes"
      },
      {
        id: 5,
        name: "Sports"
      },
      {
        id: 6,
        name: "Business"
      }
    ],
    news: [],
    country: "eg",
    selectSubCategory: "",
    page: 1,
    hasMore: true,
    isLoading: true,
    categoryKey: 1
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
      .get("https://api.myjson.com/bins/6frhm", {
        params: {
          cat: this.state.categoryKey
        }
      })
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
    this.setState(
      {
        selectSubCategory: $(e.target).text(),
        isLoading: true,
        news: []
      },
      () => this.loadArticles()
    );
  };

  selectCategory = (e) => {
    $(e.target)
      .siblings()
      .remove("active");
    $(e.target).addClass("active");
    const value = $(e.target).text();
    const category = this.state.categories.find((item) => item.name === value);
    this.setState(
      {
        categoryKey: category.id,
        isLoading: true,
        news: []
      },
      () => {
        this.loadSubCategories();
        this.loadArticles();
      }
    );
    console.log("I was clicked", value);
  };

  componentDidMount() {
    this.loadCategories();

    this.loadSubCategories();

    this.loadArticles();

    this.scrollListener = window.addEventListener("scroll", (e) => {
      this.handelScroll(e);
    });
  }

  render() {
    const { categories, subCategory, news } = this.state;
    return (
      <CategoriesProvider
        value={{ categories, selectCategory: this.selectCategory }}>
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
