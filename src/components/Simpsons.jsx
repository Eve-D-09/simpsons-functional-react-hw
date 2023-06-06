import React from "react";
import Character from "./Character";

const Simpsons = (props) => {
  const { simpsons } = props;

  return simpsons.map((item, index) => {
    return (
        <Character item={item} key={item.id} />
    )
  });
};

export default Simpsons;
