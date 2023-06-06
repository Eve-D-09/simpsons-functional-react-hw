import React from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

const Character = (props) => {
  const { character, quote, image, id, characterDirection, liked } = props.item;

  if (characterDirection === "Left") {
    return (
      <div className="characterWrapper">
        <div className="characterContainer">
          <Name character={character} id={id} liked={liked} />
          <Image image={image} />
          <Quote quote={quote} />
          <Delete id={id} />
        </div>
      </div>
    );
  }

  return (
    <div className="characterWrapper">
      <div className="characterContainer">
        <Name character={character} id={id} liked={liked} />
        <Quote quote={quote} />
        <Image image={image} />
        <Delete id={id} />
      </div>
    </div>
  );
};

export default Character;
