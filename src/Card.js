import React from "react";
import "./Card.css";

function Card(props) {
  const { name, email, id } = props;
  return (
    <div className="Card">
      <img alt="" src={`https://robohash.org/${id}?200x200`} />
      <p>{name}</p>
      <p>{email}</p>
      <p>{id}</p>
    </div>
  );
}

export default Card;
