export default function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <li
          style={{
            color: i.completed ? "grey" : "white",
            textDecoration: i.completed ? "line-through" : "",
          }}
        >
          {i.item} - {i.quantity}
        </li>
      ))}
    </ul>
  );
}
