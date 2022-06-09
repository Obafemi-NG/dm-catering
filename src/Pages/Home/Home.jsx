import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles["page-container"]}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles["page-content"]}>
        Home Page
        <div className={styles.menu}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Home;
