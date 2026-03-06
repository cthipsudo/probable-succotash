function ShoppingListItem({ item, quantity, completed }) {
  const style = {
    color: completed ? "grey" : "white",
    textDecoration: completed ? "line-through" : "",
  };
  return (
    <li style={style}>
      {item} - {quantity}
    </li>
  );
}

export default ShoppingListItem;
