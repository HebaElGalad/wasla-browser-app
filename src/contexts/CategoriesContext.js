import React from "react";

const CategoriesContext = React.createContext();

export const CategoriesProvider = CategoriesContext.Provider;

export const CategoriesConsumer = CategoriesContext.Consumer;
