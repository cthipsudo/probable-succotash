function handleClick() {
  console.log("I click");
}

export default function Clicker() {
  return (
    <div>
      <p>Click The Button</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
