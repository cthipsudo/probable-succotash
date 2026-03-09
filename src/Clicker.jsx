function handleHover() {
  console.log("I hover");
}

export default function Clicker({ message, buttonText }) {
  const handleClick = function () {
    alert(message);
  };

  return (
    <div>
      <p>Click The Button</p>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}
