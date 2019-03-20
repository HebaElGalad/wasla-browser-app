import React from "react";

const NewsContext = React.createContext();

export const NewsProvider = NewsContext.Provider;

export const NewsConsumer = NewsContext.Consumer;
