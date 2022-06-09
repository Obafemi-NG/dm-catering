import styles from "./Menu.module.css";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as MenuOption } from "../../assets/bars-solid.svg";

const Menu = () => {
  return (
    <div className={styles["menu-container"]}>
      <div>
        <Home height={22} width={22} fill="#804996" />
      </div>
      <div>
        <Cart height={22} width={22} fill="#804996" />
      </div>
      <div>
        <MenuOption height={22} width={22} fill="#804996" />
      </div>
    </div>
  );
};

export default Menu;
