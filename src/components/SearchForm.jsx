// import React, { useState } from "react";

function SearchForm({ search, setSearch }) {
  return (
    <>
      <form className="my-6 ml-16 flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by name or type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="inputSearch w-[95%] p-2 pr-10 border border-gray-400 rounded-lg bg-white"
          />
          <span className="absolute right-24 top-1/2 -translate-y-1/2 text-gray-500">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
