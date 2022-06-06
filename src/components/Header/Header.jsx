import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/DM-catering new Logo.svg";
import { ReactComponent as DropDown } from "../../assets/bars-solid.svg";

const Header = () => {
  const handleToggle = () => {};
  return (
    <div className={styles["header-container"]}>
      <div className={styles["logo-container"]}>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.links}>
        <ul className={styles.link}>
          <li>My Cart</li>
        </ul>
        <ul className={styles.link}>
          <li> Order History </li>
        </ul>
        <ul className={styles.link}>
          {" "}
          <li> Sign In </li>
        </ul>
      </div>
      <div className={styles.dropDown}>
        <DropDown fill="purple" onClick={handleToggle} />
      </div>
    </div>
  );
};

export default Header;
