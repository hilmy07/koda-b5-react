import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      setCharacter(data);
    })();
  }, [id]);

  if (!character) {
    return (
      <div className="min-h-screen bg-blue-200 flex justify-center items-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-blue-200 w-full pt-8 pb-18">
        <header>
          <Navbar />
        </header>

        <main className="pt-4 px-4">
          <h1 className="flex justify-center text-3xl mt-6 font-medium">
            Detail Character
          </h1>

          {/* Card menyamping */}
          <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl border border-blue-300 flex flex-col md:flex-row gap-6">
            {/* LEFT — IMAGE */}
            <div className="flex-shrink-0">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-[290px] object-cover rounded-xl shadow-md mt-12"
              />
            </div>

            {/* RIGHT — INFORMATION */}
            <div className="flex flex-col justify-center w-full">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                {character.name}
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between bg-blue-100 p-3 rounded-lg">
                  <span className="font-medium">Status:</span>
                  <span className="font-semibold">{character.status}</span>
                </div>

                <div className="flex justify-between bg-blue-100 p-3 rounded-lg">
                  <span className="font-medium">Species:</span>
                  <span className="font-semibold">{character.species}</span>
                </div>

                <div className="flex justify-between bg-blue-100 p-3 rounded-lg">
                  <span className="font-medium">Gender:</span>
                  <span className="font-semibold">{character.gender}</span>
                </div>

                <div className="flex justify-between bg-blue-100 p-3 rounded-lg">
                  <span className="font-medium">Origin:</span>
                  <span className="font-semibold">
                    {character.origin?.name}
                  </span>
                </div>

                <div className="flex justify-between bg-blue-100 p-3 rounded-lg">
                  <span className="font-medium">Location:</span>
                  <span className="font-semibold">
                    {character.location?.name}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="/card"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                >
                  Back
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Detail;
