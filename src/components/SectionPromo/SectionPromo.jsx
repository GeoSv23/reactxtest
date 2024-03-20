import Button from "../Button/Button";
import "./sectionPromo.scss";

export default function SectionPromo({ children }) {
  return (
    <>
      <div className="section-promo">
        <div className="promo-text">
          <h2>Акция продлится с 1 по 20 сентября</h2>

          <h1 className="promo-title">
            ЭТО ВАША
            <br /> <span> ВЫГОДА!</span>
          </h1>
          <h2>
            Тариф &laquo;Мой онлайн+&raquo; и 1 ТБ трафика в подарок для новых
            абонентов
          </h2>
          <Button>Принять участие</Button>
        </div>

        <div className="promo-image">
          <img src="src\images\Boss1 2.png" alt="boss" />
        </div>
      </div>
    </>
  );
}
