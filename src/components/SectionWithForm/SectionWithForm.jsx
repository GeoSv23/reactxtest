import FormNumber from "../formNumber/FormNumber";
import "../SectionWithForm/sectionWithForm.scss";

export default function SectionWithForm() {
  return (
    <>
      <div className="section-promo">
        <div className="promo-text">
          <h1 className="form-title">
            Несколько шагов
            <br /> <span> и 1ТБ - ваш</span>
          </h1>
          <FormNumber />
        </div>

        <div className="instruction-items">
          <div className="instruction-item">
            <img
              src="src\images\oneNumber.svg"
              alt=""
              className="instruction-img"
            />
            <p className="instruction-desc">
              Введите свой номер телефона, затем дождитесь промокода для
              получения ТБ
            </p>
          </div>
          <div className="instruction-item">
            <img
              src="src\images\twoNumber.svg"
              alt=""
              className="instruction-img"
            />
            <p className="instruction-desc">
              Перейдите в электронный магазин Tele2 и активируйте промокод при
              подключении тарифа «Мой Онлайн+»
            </p>
          </div>
          <div className="instruction-item">
            <img
              src="src\images\threeNumber.svg"
              alt=""
              className="instruction-img"
            />
            <p className="instruction-desc">
              Используйте свой подарочный ТБ от Tele2 в течение всего года
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
