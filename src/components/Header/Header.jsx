import { useState } from "react";
import CurrentCityBtn from "../CurrentCityBtn/CurrentCityBtn";
import "../Header/Header.scss";
import Logo from "../Logo";
import TableCity from "../TableCities/TableCity";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <>
      <header className="header">
        <Logo />
        <CurrentCityBtn onClick={handleClick} />
      </header>
      <TableCity open={open} />
    </>
  );
}
