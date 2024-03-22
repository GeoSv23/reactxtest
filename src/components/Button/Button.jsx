import cn from "classnames/bind";
import styles from "./index.module.scss";
const cx = cn.bind(styles);

export const Button = ({ children, onClick, isActive, ...props }) => {
  isActive;
  props;
  return (
    <button onClick={onClick} className={cx("all-buttons")}>
      {children}
    </button>
  );
};
