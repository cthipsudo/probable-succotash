export default function Heading({ color = "orange", text, fontSize }) {
  return <h1 style={{ color, fontSize }}>{text}</h1>;
}
