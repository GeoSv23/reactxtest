import { Button } from "../Button/Button";
import "./sectionPromo.scss";
import { Typography } from "../Typeography/Typography";
import styles from "../Typeography/index.module.scss";
import cn from "classnames/bind";
const cx = cn.bind(styles);

export default function SectionPromo() {
  const modal = document.querySelector(".modal-window");
  console.log(modal);
  function openButton() {}
  openButton();
  return (
    <>
      <div className="section-promo">
        <div className="promo-text">
          <Typography className={cx("all-h3")} variant="h3">
            Акция продлится с 1 по 20 сентября
          </Typography>

          <h1 className="promo-title">
            ЭТО ВАША
            <br /> <span> ВЫГОДА!</span>
          </h1>
          <Typography variant="h3">
            Тариф &laquo;Мой онлайн+&raquo; и 1 ТБ трафика в подарок для новых
            абонентов
          </Typography>
          <Button>Принять участие</Button>
        </div>

        <div className="promo-image">
          <img src="src\images\Boss1 2.png" alt="boss" />
        </div>
      </div>
    </>
  );
}
