import { useState } from 'react'

export default function Form({ onAddItems }) {
  // Local states for controlled form inputs
  const [description, setDescription] = useState(''); // For the text input
  const [quantity, setQuantity] = useState(1); // For the dropdown quantity

  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload on form submission

    // Guard clause: do nothing if the description field is empty
    if (!description) return;

    // Create a new item object from the form values
    // This object can be computed directly from existing state
    const newItem = {
      id: Date.now(), // Unique identifier (timestamp)
      description, // From state
      quantity, // From state
      packed: false, // Default value for all new items
    };

    // Send the new item object up to the parent component (App)
    onAddItems(newItem);

    // Reset form fields after submission
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 className="">What do you need for your 😍 trip?</h3>

      {/* Dropdown list to select quantity (1–20) */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      {/* Controlled text input for item description */}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Item..."
      />

      {/* Submit button to add the new item */}
      <button>ADD</button>
    </form>
  );
}
