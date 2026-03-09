import { useState } from "react";
import "./Toggler.css";

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const toggleisHappy = () => {
    setIsHappy(!isHappy);
  };
  return (
    <p className="Toggler" onClick={toggleisHappy}>
      {isHappy ? "😀" : "😔"}
    </p>
  );
}
