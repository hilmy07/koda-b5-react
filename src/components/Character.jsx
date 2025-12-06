import React from "react";

function Character({ filtered, onClick }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 place-items-center">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white w-full max-w-[250px] h-[300px] rounded-lg shadow-md flex flex-col items-center px-4 py-3"
              onClick={(e) => onClick(e, item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-md"
              />
              <p className="text-center font-semibold mt-3 text-sm">
                {item.name}
              </p>
              <p className="text-center font-semibold mt-1 text-sm">
                Type: {item.species}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            No results found.
          </p>
        )}
      </div>
    </>
  );
}

export default Character;
