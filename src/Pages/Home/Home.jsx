import Header from "../../components/Header/Header";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles["page-container"]}>
      <Header />
      <div className={styles["page-content"]}>Home Page</div>
    </div>
  );
};

export default Home;
