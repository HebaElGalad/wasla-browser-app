import React, { Component } from "react";
import StyledCardWrapper from "./style__Card";
import CardImage from "../CardImage";
import CardHeader from "../CardHeader";
import CardFooter from "../CardFooter";

class Card extends Component {
  render() {
    return (
      <StyledCardWrapper>
        <CardHeader
          title="الصحة تواجه طوفان ولادة طفل كل 15 ثانية.."
          url="https://www.youm7.com/story/2019/2/5/الصحة-تواجه-طوفان-ولادة-طفل-كل-15-ثانية-128-منطقة/4129373"
        />
        <div className="card__body">
          <CardImage
            url="https://img.youm7.com/large/20190115010338338.jpg"
            title="Egyptian Health Minister"
          />
        </div>
        <CardFooter />
      </StyledCardWrapper>
    );
  }
}

export default Card;
