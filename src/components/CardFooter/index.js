import React, { Component } from "react";
import Footer from "./style__CardFooter";
import CardActionButtons from "../CardActionButtons";
import CardInfo from "../CardInfo";

class CardFooter extends Component {
  state = {};
  render() {
    return (
      <Footer>
        <CardActionButtons />
        <CardInfo name="اليوم السابع" time="2019-03-19T09:43:00Z" />
      </Footer>
    );
  }
}

export default CardFooter;
