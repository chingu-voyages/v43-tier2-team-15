import { useState } from "react";

function Searchbar() {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="grow rounded-3xl bg-birch-white h-10 flex">
      <input
        className="h-10 bg-transparent text-gray-600 rounded-3xl grow px-5 outline-none focus:ring-0"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleQueryChange}
      />

      <button className="w-10 h-10 bg-bonfire rounded-full flex justify-center items-center hover:rotate-12 hover:scale-105 duration-100">
        <img src="/svg/search-icon.svg" alt="search icon" />
      </button>
    </div>
  );
}

export default Searchbar;
