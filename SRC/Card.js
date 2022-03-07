import React from "react"

const Card = (props) => {
  return React.createElement("div", {}, [
    React.createElement("img", {}, props.frontfase),
    React.createElement("img", {}, props.backfase),
  ]);
};

export default Card;
