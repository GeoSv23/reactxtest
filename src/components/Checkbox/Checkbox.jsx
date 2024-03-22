export const Checkbox = () => {
  return (
    <div className="checkbox-container">
      <p>
        <input
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
  );
};
