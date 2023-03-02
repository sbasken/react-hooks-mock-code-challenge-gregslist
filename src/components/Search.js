import React, { useState } from "react";

function Search({ onSubmit }) {
  const [ searchQuery, setSearchQuery ] = useState("")

  function handleSubmit(e) {
    console.log(e)
    e.preventDefault();
    onSubmit( searchQuery )
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
