import "../formNumber/formNumber.scss";

export default function FormNumber() {
  return (
    <form className="section-number__form" action="/" method="post">
      <label htmlFor="number"> Номер телефона </label>
      <input
        pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
        type="tel"
        minLength="20"
        maxLength="20"
        id="number"
        className="input-form"
        placeholder="+7 (999) 692 06 09"
      />
      <div className="checkbox-container">
        <p>
          <input
            checked
            type="checkbox"
            className="input-agreement"
            id="agreement-check"
          />
          <label className="agree" htmlFor="agreement-check">
            <p className="agree-desc">
              Даю согласие на обработку персональных данных.
              <a className="agree-link" href="#">
                Условия соглашения
              </a>
            </p>
          </label>
        </p>
      </div>
      <button className="all-buttons send-promo-button">
        <a className="send-promo-link" href="#">
          Выслать промокод
        </a>
      </button>
    </form>
  );
}
