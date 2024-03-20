import "../TableCities/tableCity.scss";

import { citiesList } from "./constans";

export default function TableCity({ open }) {
  return (
    open && (
      <div className="cities-wrapper">
        <div className="cities">
          <h1 className="cities__title">Выберите город</h1>
          <div className="cities__items">
            {citiesList.map((city) => (
              <h2 key={city.name} className="cities__item">
                {city.name}
              </h2>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
