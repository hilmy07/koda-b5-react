import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import Character from "../components/Character";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

function Card() {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

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

  const filtered = characters.filter((item) => {
    const matchText = item.name.toLowerCase().includes(search.toLowerCase()); // ||
    // item.species.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "" || item.status.toLowerCase() === status.toLowerCase();

    return matchText && matchStatus;
  });

  const onClick = (e, item) => {
    e.preventDefault();
    // console.log("berhasil");
    const slug = item.name.toLowerCase().split(" ").join("-");

    navigate(`/characters/${item.id}/${slug}`);
  };

  return (
    <>
      <div className="min-h-screen bg-blue-200 w-full pt-8 pb-18">
        <Navbar />
        {/* Search Form */}
        <SearchForm
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          characters={characters}
        />
        {/* Cards Grid */}
        <Character filtered={filtered} onClick={onClick} />
      </div>
    </>
  );
}

export default Card;
