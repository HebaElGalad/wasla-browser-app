import React, { Component } from "react";
import uuid from "uuid/v4";

import { StyledCardWrapper, StyledCardBody } from "./style__Card";
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
              <StyledCardBody>
                <CardImage url={item.image} title={item.title} />
              </StyledCardBody>
              <CardFooter name={item.name} time={item.time} />
            </StyledCardWrapper>
          ))
        }
      </NewsConsumer>
    );
  }
}

export default Card;
