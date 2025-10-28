export default function Stats({ itemsArr }) {
  if (!itemsArr.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const numItems = itemsArr.length;
  const itemTotal = itemsArr
    .map((itemObj) => itemObj.quantity)
    .reduce((acc, curVal) => acc + curVal, 0);
  const numOfPacked = itemsArr.filter((itemObj) => itemObj.packed).length;
  const percentage =
    numItems === 0 ? 0 : Math.round((numOfPacked / numItems) * 100);

  return (
    <footer className="stats">
      {/* This will later display total items and packed percentage */}
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go'
          : `🛍️ You have ${numItems} items with a total of ${itemTotal} different items
        on your list, and you already packed
        ${numOfPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
