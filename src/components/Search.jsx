import React from "react";
import { UilSearch } from "@iconscout/react-unicons"; // Import search icon
import "./Search.css"; 

const Search = ({ onSearch }) => {
  return (
    <div className="search-container">
      <UilSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
