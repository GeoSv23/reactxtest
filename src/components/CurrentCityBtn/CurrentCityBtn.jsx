export default function CurrentCityBtn({ onClick }) {
  return (
    <div className="current-city">
      <img src="src\images\Location.png" alt="" />
      <button onClick={onClick}>Москва</button>
    </div>
  );
}
