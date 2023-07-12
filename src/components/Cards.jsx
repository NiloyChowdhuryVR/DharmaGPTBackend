import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {

  let titleLink = `/chat/${props.title.toLowerCase()}`

  return (
    <div className="cards">
      <Link to={titleLink}>
        <img src={props.url} alt="chat image" />
      </Link>
      <h4>{props.title} </h4>
    </div>
  );
};

export default Cards;
