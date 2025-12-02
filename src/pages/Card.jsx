import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import Character from "../components/Character";

function Card() {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        if (!res.ok) throw new Error(res.status);

        const data = await res.json();
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const filtered = characters.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.species.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search Form */}
      <SearchForm search={search} setSearch={setSearch} />

      {/* Cards Grid */}
      <Character filtered={filtered} />
    </>
  );
}

export default Card;
