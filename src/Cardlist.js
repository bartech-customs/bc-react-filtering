import React from "react";
import Card from "./Card";
import "./Cardlist.css";

function Cardlist({ robots }) {
  return (
    <div className="Cardlist">
      {robots.map((user, index) => (
        <Card
          key={index}
          name={robots[index].name}
          email={robots[index].email}
          id={user.id}
        />
      ))}
    </div>
  );
}

export default Cardlist;
