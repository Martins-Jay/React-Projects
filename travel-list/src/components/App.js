import { useState } from 'react';
import Logo from './logo.js';
import Form from './form.js';
import PackingList from './packingList.js';
import Stats from './Stats.js';

// Default starting items (not used, but helpful for testing)
const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Box', quantity: 5, packed: true },
];

export default function App() {
  // State to hold all the items in the packing list
  // Starts as an empty array (can be changed to initialItems for testing)
  let [items, setItems] = useState([]);

  // Function passed down to Form component to handle adding a new item
  function handleAddItem(item) {
    // Update state immutably by creating a new array that includes the new item
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    // remove item with the given id from items array by updating state immutably
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((itemObj) =>
        itemObj.id === id ? { ...itemObj, packed: !itemObj.packed } : itemObj
      )
    );
  }

  function handleClearList() {
    // alert('Are you sure you want to delete all items?')
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    ); // returns a boolean

    if (confirmed) setItems((items = []));
  }

  return (
    <div className="app">
      <Logo />
      {/* Pass handleAddItem as a prop so Form can communicate new items */}
      <Form onAddItems={handleAddItem} />
      {/* Pass items array down to PackingList for rendering */}
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Stats itemsArr={items} />
    </div>
  );
}
