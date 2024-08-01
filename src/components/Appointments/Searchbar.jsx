import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Handle input change and trigger search
  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Trigger the search with the new query
  };

  return (
    <div className="search-bar p-0 d-none d-lg-block ms-2">
      <div id="search" className="menu-search mb-0">
        <input
          type="text"
          className="form-control border rounded-pill"
          placeholder="Search Keywords..."
          value={query}
          onChange={handleInputChange} // Update query on input change
        />
      </div>
    </div>
  );
};

export default SearchBar;
