import React, { useEffect, useState } from "react";

function Card() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        if (!res.ok) throw new Error(res.status);

        const data = await res.json();
        setCharacters(data.results); // simpan objek lengkap
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {/* Search Form */}
      <form id="search-form" className="my-6 ml-16 flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search character..."
            className="inputSearch w-[95%] p-2 pr-10 border border-gray-400 rounded-lg bg-white"
          />
          <button
            type="submit"
            className="absolute right-24 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label="Search"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 ml-20 mb-24">
        {characters.map((item) => (
          <div
            key={item.id}
            className="bg-white w-full max-w-[250px] h-[300px] rounded-lg shadow-md flex flex-col items-center px-4 py-3"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-md"
            />
            <p className="text-center font-semibold mt-3 text-sm">
              {item.name}
            </p>
            <p className="text-center font-semibold mt-3 text-sm">
              Type: {item.species}
            </p>
          </div>
        ))}
      </div>

      <p id="no-results" className="text-center text-gray-600 hidden">
        No results found.
      </p>
    </>
  );
}

export default Card;
