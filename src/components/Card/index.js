import React, { Component } from "react";
import uuid from "uuid/v4";

import StyledCardWrapper from "./style__Card";
import CardImage from "../CardImage";
import CardHeader from "../CardHeader";
import CardFooter from "../CardFooter";

import { NewsConsumer } from "../../contexts/NewsContext";

class Card extends Component {
  render() {
    return (
      <NewsConsumer>
        {(context) =>
          context.map((item) => (
            <StyledCardWrapper key={uuid()}>
              <CardHeader url={item.url} title={item.title} />
              <div className="card__body">
                <CardImage url={item.urlToImage} title={item.title} />
              </div>
              <CardFooter name={item.source.name} time={item.publishedAt} />
            </StyledCardWrapper>
          ))
        }
      </NewsConsumer>
    );
  }
}

export default Card;
