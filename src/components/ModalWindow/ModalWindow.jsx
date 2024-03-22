import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { GetNumber } from "../GetNumber/GetNumber";

import cn from "classnames/bind";
import styles from "./index.module.css";
const cx = cn.bind(styles);

export const ModalWindow = () => {
  return (
    <div className={cx("modal-window")}>
      <GetNumber />
      <Checkbox />
      <Button> Выслать промокод </Button>
    </div>
  );
};
