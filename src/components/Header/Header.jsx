import { useState } from "react";
import CurrentCityBtn from "../CurrentCityBtn/CurrentCityBtn";
import "../Header/Header.scss";
import Logo from "../Logo";
import TableCity from "../TableCities/TableCity";
import { ModalWindow } from "../ModalWindow/ModalWindow";

export default function Header() {
  const [visible, setVisible] = useState(false);

  const [city, setCity] = useState("Moscow");

  function getVisible() {
    setVisible(!visible);
    document.body.classList.add("blocked");
  }

  return (
    <>
      <header className="header">
        <Logo />
        <CurrentCityBtn
          currentCity={city}
          icon={"Location.png"}
          onClick={getVisible}
        />
      </header>
      <TableCity
        setVisible={setVisible}
        setCity={setCity}
        actuallCity={city}
        open={visible}
      />
      <ModalWindow />
    </>
  );
}
