function SearchForm({ search, setSearch, status, setStatus, characters }) {
  return (
    <form className="my-6 flex flex-col md:flex-row justify-center gap-4 w-full px-4">
      {/* Filter NAMA */}
      <select
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-[30%] p-2 border border-gray-400 rounded-lg bg-white"
      >
        <option value="">Cari berdasarkan nama...</option>

        {characters.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      {/* Filter STATUS */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full md:w-[30%] p-2 border border-gray-400 rounded-lg bg-white"
      >
        <option value="">Semua Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </form>
  );
}

export default SearchForm;
