import Header from "../../components/Header/Header";
import styles from "./SignIn.module.css";
import { ReactComponent as Google } from "../../assets/google-plus-g-brands.svg";
const SignIn = () => {
  return (
    <div className={styles["page-container"]}>
      <Header />
      <div className={styles["page-content"]}>
        <div className={styles["form-section"]}>
          <div className={styles["input-section"]}>
            <input className={styles.input} type="email" />
            <label className={styles.label} htmlFor="email">
              Email*
            </label>
          </div>
          <div className={styles["input-section"]}>
            <input className={styles.input} type="password" />
            <label className={styles.label} htmlFor="email">
              Password*
            </label>
          </div>
        </div>
        <div className={styles["cta-section"]}>
          <button className={styles.signin}>SIGN IN</button>
          <div className={styles["google-container"]}>
            <button className={styles["google-signin"]}>
              Sign in with Google{" "}
              <span className={styles["google-logo"]}>
                {" "}
                <Google height={30} width={30} fill="white" />{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
