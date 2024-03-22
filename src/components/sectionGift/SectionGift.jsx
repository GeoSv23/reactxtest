import { Typography } from "../Typeography/Typography";
import "../sectionGift/sectionGift.scss";

export default function SectionGift() {
  return (
    <section className="section-gift">
      <h3 className="section-gift__title">
        Один терабайт — много любимых развлечений
      </h3>
      <Typography variant="h3" className="section-gift__desc">
        Подарок получают только новые абоненты при подключении услуг Tele2
        с&nbsp;тарифом &laquo;Мой онлайн+&raquo;. Трафик расходуется
        в&nbsp;течение года.
      </Typography>
      <div className="section-gift__items">
        <div className="section-gift__item">
          <img
            src="src\images\Group 656.svg"
            alt=""
            className="section-gift__img"
          />
          <Typography variant="h3" className="section-gift__p">
            Около 500 часов видео
          </Typography>
        </div>
        <div className="section-gift__item">
          <img
            src="src\images\Group 655.png"
            alt=""
            className="section-gift__img"
          />
          <Typography variant="h3" className="section-gift__p">
            Примерно 200 000 песен
          </Typography>
        </div>
        <div className="section-gift__item">
          <img
            src="src\images\Group 657.png"
            alt=""
            className="section-gift__img"
          />
          <Typography variant="h3" className="section-gift__p">
            Порядка 300 000 фото
          </Typography>
        </div>
      </div>
    </section>
  );
}
