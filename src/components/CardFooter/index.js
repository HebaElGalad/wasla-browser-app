import React from "react";
import Footer from "./style__CardFooter";
import CardActionButtons from "../CardActionButtons";
import CardInfo from "../CardInfo";

const CardFooter = ({ name, time }) => {
  return (
    <Footer>
      <CardActionButtons />
      <CardInfo name={name} time={time} />
    </Footer>
  );
};

export default CardFooter;
