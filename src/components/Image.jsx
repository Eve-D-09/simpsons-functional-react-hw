import React from "react";

const Image = (props) => {
  const { image, character } = props;
  return (
    <div>
      <img src={image} alt={character} />
    </div>
  );
};

export default Image;
