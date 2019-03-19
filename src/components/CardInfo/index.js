import React, { Component } from "react";
import { StyledCardDate, CardName } from "./Style__CardInfo";

import $ from "jquery";
import "timeago";

class CardInfo extends Component {
  componentDidMount() {
    $("time.timeago").timeago();
  }

  render() {
    const { name, time } = this.props;
    return (
      <StyledCardDate>
        <CardName>{name}/</CardName>
        <time className="timeago" dateTime={time}>
          {time}
        </time>
      </StyledCardDate>
    );
  }
}

export default CardInfo;
