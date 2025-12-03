function SearchForm({ search, setSearch, characters }) {
  return (
    // <form className="my-6 flex justify-center gap-2 w-full">
    //   <div className="flex-1">
    //     <select
    //       value={search}
    //       onChange={(e) => setSearch(e.target.value)}
    //       className="inputSearch w-[70%] p-2 pr-10 border border-gray-400 rounded-lg bg-white"
    //     >
    //       <option value="">Pilih karakter...</option>

    //       {characters.map((item) => (
    //         <option key={item.id} value={item.name}>
    //           {item.name}
    //         </option>
    //       ))}
    //     </select>
    //   </div>
    // </form>
    <form className="my-6 flex justify-center w-full">
      <select
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-[70%] p-2 pr-10 border border-gray-400 rounded-lg bg-white"
      >
        <option value="">Pilih karakter...</option>

        {characters.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default SearchForm;
