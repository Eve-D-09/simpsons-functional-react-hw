import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import Controls from "./components/Controls";

const App = () => {
  const [simpsons, setSimpsons] = useState();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const getData = async () => {
    
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
      );
      data.forEach((element, index) => {
        element.id = index + Math.random();
      });
      setSimpsons(data);
    } catch (error) {
      console.log(error);
    }
    
  };

  useEffect(() => {
    getData();
    
  }, []);

  // console.log(simpsons);

  const onSearchInput = (value) => {
    setSearch(value);
  };

  const onSortCharacters = (value) => {
    setSort(value);
  };

  const toggleLiked = (id) => {
    const _simpsons = [...simpsons];
    const indexOf = _simpsons.findIndex((char) => {
      return char.id === id;
    });
    _simpsons[indexOf].liked = !simpsons[indexOf].liked;
    setSimpsons(_simpsons);
  };

  const onDelete = (id) => {
    const _simpsons = [...simpsons];
    const indexOf = _simpsons.findIndex((char) => {
      return char.id === id;
    });
    _simpsons.splice(indexOf, 1);
    setSimpsons( _simpsons);
  };

  if (!simpsons) return <Loading />;

  

  let filtered = [...simpsons];
  if (search) {
    filtered = filtered.filter((item) => {
      return item.character
        .toLowerCase()
        .includes(search.toLowerCase());
    });
  }

  if (sort === "az") {
    filtered.sort((a, b) => {
      if (a.character > b.character) return 1;
      if (a.character < b.character) return -1;
    });
  } else if (sort === "za") {
    filtered.sort((a, b) => {
      if (a.character > b.character) return -1;
      if (a.character < b.character) return 1;
    });
  }

  let total = 0;
  filtered.forEach((char) => {
    if (char.liked) total++;
  });

  if (filtered.length === 0) return <p>We're sorry, there's no results...</p>;

  return (
    <>
      <h1>Total no of liked chars #{total}</h1>
      <Controls onSearchInput={onSearchInput} onSortCharacters={onSortCharacters} />
      <Simpsons simpsons={filtered} toggleLiked={toggleLiked} onDelete={onDelete} />
    </>
  );
};

export default App;


