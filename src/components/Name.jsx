import React from 'react';

const Name = (props) => {
    const { liked, character, id, toggleLiked } = props;


    return ( 
        <div>
        <h2>{character}</h2>
        <button onClick={() => toggleLiked(id)}>
          { liked ? "Liked" : "Not liked"}
        </button>
      </div>
     );
}
 
export default Name;