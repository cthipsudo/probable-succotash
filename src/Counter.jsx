import { useState } from "react";

export default function Counter() {
  const [num, updateNum] = useState(0);

  function handleClick() {
    updateNum(num + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Counter</button>
      <p>The count is: {num}</p>
    </div>
  );
}
