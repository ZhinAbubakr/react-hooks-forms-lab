import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [allItems, setAllItems] = useState(items);
  const [search, setSearch] = useState(""); // Define search state

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setAllItems([...allItems, newItem]); // Add the new item to the list of all items
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value); // Update search state with the value from the input
  };

  const itemsToDisplay = allItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => {
    // Filter items based on search term
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        search={search} // Pass search state as prop
        onSearchChange={handleSearchChange} // Pass handleSearchChange function as prop
        onCategoryChange={handleCategoryChange}
      />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
