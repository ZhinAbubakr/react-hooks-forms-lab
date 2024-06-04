import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  const handleSearchChange = (event) => {
    if (typeof onSearchChange === 'function') { // Check if onSearchChange is a function
      onSearchChange(event); // Pass the event object instead of event.target.value
    }
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search} // Ensure the value of the input field is controlled by the 'search' prop
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
