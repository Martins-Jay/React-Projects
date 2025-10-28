export default function Item({ itemObj, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => onToggleItems(itemObj.id)}
      />
      {/* Apply strikethrough style if the item is packed */}
      <span style={itemObj.packed ? { textDecoration: 'line-through' } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>

      {/* Button to delete an item */}
      <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
    </li>
  );
}
