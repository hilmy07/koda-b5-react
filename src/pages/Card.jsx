import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import Character from "../components/Character";
import Navbar from "../components/Navbar";

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
      <div className="min-h-screen bg-blue-200 w-full pt-8 pb-18">
        <Navbar />
        {/* Search Form */}
        <SearchForm
          search={search}
          setSearch={setSearch}
          characters={characters}
        />
        {/* Cards Grid */}
        <Character filtered={filtered} />
      </div>
    </>
  );
}

export default Card;
