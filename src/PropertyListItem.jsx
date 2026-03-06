export default function PropertyListItem({ name, rating, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>${price} a night</h3>
      <p>{rating} ⭐</p>
    </div>
  );
}
