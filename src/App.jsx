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
      setSimpsons(data);
    } catch (error) {
      console.log(error);
    }
    // data.forEach((element, index) => {
    //   element.id = index + Math.random();
    // });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(simpsons);

  const toggleLiked = () => {
    const simpsons = [...simpsons];
    const indexOf = simpsons.findIndex((char) => {
      return char.id === id;
    });
    simpsons[indexOf].liked = !simpsons[indexOf].liked;
    setSimpsons({ ...simpsons, char });
  };

  const onDelete = () => {
    const simpsons = [...simpsons];
    const indexOf = simpsons.findIndex((char) => {
      return char.id === id;
    });
    simpsons.splice(indexOf, 1);
    setSimpsons({ ...simpsons, char });
  };

  if (!simpsons) return <Loading />;

  if (simpsons.length === 0) return <p>You deleted everything!</p>;

  let filtered = [...simpsons];
  if (search) {
    filtered = filtered.filter((item) => {
      return item.character
        .toLowerCase()
        .includes(this.props.search.toLowerCase());
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

  return (
    <>
      <h1>Total no of liked chars #{total}</h1>
      <Controls search={search} sort={sort} />
      <Simpsons simpsons={simpsons} toggleLiked={toggleLiked} onDelete={onDelete} />
    </>
  );
};

export default App;

//  component simpsons: simpsons={filtered}
