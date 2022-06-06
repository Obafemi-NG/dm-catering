import Header from "../../components/Header/Header";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles["page-container"]}>
      <Header />
      <div className={styles["page-content"]}>Sign Up Page</div>
    </div>
  );
};

export default SignUp;
