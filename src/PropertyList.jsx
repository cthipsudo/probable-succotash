import PropertyListItem from "./PropertyListItem";

export default function PropertyList({ data }) {
  return (
    <div style={{ display: "flex" }}>
      {data.map((p) => (
        <PropertyListItem key={p.id} {...p} />
      ))}
    </div>
  );
}
