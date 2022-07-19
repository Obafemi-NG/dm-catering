import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/DM-catering new Logo.svg";
import { ReactComponent as DropDown } from "../../assets/bars-solid.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleToggle = () => {
    setShowDropdown(!showDropdown);
  };
  const navigate = useNavigate();
  return (
    <div className={styles["header-container"]}>
      <div className={styles["logo-container"]}>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.links}>
        <ul className={styles.link}>
          <li onClick={() => navigate("/mycart")}>My Cart</li>
        </ul>
        <ul className={styles.link}>
          <li onClick={() => navigate("/myorder")}> Order History </li>
        </ul>
        <ul className={styles.link}>
          {" "}
          <li onClick={() => navigate("/signin")}> Sign In </li>
        </ul>
        <ul className={styles.link}>
          {" "}
          <li onClick={() => navigate("/contactus")}> Contact Us</li>
        </ul>
      </div>
      <div className={styles.dropDown}>
        <DropDown fill="#804996" onClick={handleToggle} />
      </div>
      <div></div>
    </div>
  );
};

export default Header;
