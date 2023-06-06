import React from "react";

const Controls = (props) => {
  const { onSearchInput, onSortCharacters } = props;

  return (
    <div className="searchContainer">
      <input onInput={(e) => onSearchInput (e.target.value) } type="text" />
      <select onChange={(e) => onSortCharacters (e.target.value)}>
        <option value=""></option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
    </div>
  );
};

export default Controls;
