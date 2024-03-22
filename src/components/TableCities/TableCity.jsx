import "../TableCities/tableCity.scss";

import { citiesList } from "./constans";

export default function TableCity({ open, setCity, setVisible }) {
  const handleClick = (name) => {
    setCity(name);
    setVisible(false);
    document.body.classList.remove("blocked");
  };

  return (
    open && (
      <div className="cities-wrapper">
        <div className="cities">
          <h1 className="cities__title">Выберите город</h1>
          <div className="cities__items">
            {citiesList.map((city) => (
              <h2
                onClick={() => handleClick(city.name)}
                key={city.name}
                className="cities__item"
              >
                {city.name}
              </h2>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
