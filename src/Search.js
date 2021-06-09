import React from "react";
import "./Search.css";

function Search({ searchValue, onSearch }) {
  return (
    <div className="Search">
      <input type="search" placeholder="Search" onChange={onSearch} />
    </div>
  );
}

export default Search;
