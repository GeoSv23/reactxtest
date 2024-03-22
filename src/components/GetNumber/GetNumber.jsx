export const GetNumber = () => {
  return (
    <>
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
    </>
  );
};
