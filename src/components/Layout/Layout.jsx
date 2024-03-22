import Header from "../Header/Header";

//Styles
import cn from "classnames/bind";
import styles from "./index.module.scss";
const cx = cn.bind(styles);

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={cx("Layout")}>{children}</main>
    </>
  );
};
