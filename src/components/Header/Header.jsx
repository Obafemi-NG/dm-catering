import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/DM-catering new Logo.svg";
import { ReactComponent as DropDown } from "../../assets/bars-solid.svg";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["logo-container"]}>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.dropDown}>
        <DropDown />
      </div>
    </div>
  );
};

export default Header;
