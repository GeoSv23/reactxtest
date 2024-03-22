import styles from "../CurrentCityBtn/index.module.css";
import cn from "classnames/bind";

const cx = cn.bind(styles);

export default function CurrentCityBtn({
  onClick,
  icon,
  currentCity = "Moscow",
}) {
  return (
    <div className={cx("current-city-wrapper")}>
      {icon && <img src={`src/images/${icon}`} alt="" />}
      <button className={cx("current-city")} onClick={onClick}>
        {currentCity}
      </button>
    </div>
  );
}
