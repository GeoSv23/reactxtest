import { useState } from "react";

export default function Button({ children, isActive, ...props }) {
  props;
  isActive = false;
  const [buttonActive, setButtonActive] = useState((isActive = false));
  console.log(isActive);
  return (
    <button
      onClick={() => {
        setButtonActive(!isActive);
      }}
      className={buttonActive ? "button active" : "button"}
    >
      {children}
    </button>
  );
}
