import React from "react";
// import $ from "jquery";

// const selectSubCategory = (e) => {
//   e.preventDefault();
//   const targetElement = e.target;
//   console.log($(targetElement).text());
//   // return $(targetElement).text();
// };

const SelectSubCategoryContext = React.createContext();

export const SelectSubCategoryProvider = SelectSubCategoryContext.Provider;

export const SelectSubCategoryConsumer = SelectSubCategoryContext.Consumer;
