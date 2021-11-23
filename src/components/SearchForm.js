import React, { useState } from "react";

export default function SearchForm({ handleSubmit }) {
  const [query, setQuery] = useState("");

  return (
    <form className="search-wrapper" onSubmit={(e) => handleSubmit(e, query)}>
      <input
        className="pokemon-input"
        type="text"
        placeholder="Search pokemon"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="search-btn"
        onClick={(e) => handleSubmit(e, query)}
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
