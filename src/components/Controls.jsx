import  { useState } from 'react';

const Controls = () => {
    
    
    const [search, setSearch] = useState();
    const [ sort, setSort ] = useState();

    const onSearchInput = (e) => {
        setSearch(e.target.value);
    }

    const onSortCharacters = (e) => {
        setSort(e.target.value);
    }

    return ( 
        <div className="searchContainer">
        <input onInput={onSearchInput} type="text" />
        <select onChange={onSortCharacters}>
              <option value=""></option>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
        </select>
        
        </div>
     );
}
 
export default Controls;