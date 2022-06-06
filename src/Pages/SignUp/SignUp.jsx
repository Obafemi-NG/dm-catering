import Header from "../../components/Header/Header";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["page-container"]}>
      <Header />
      <div className={styles["page-content"]}>
        <div className={styles["form-section"]}>
          <div className={styles.name}>
            <div className={styles["input-section"]}>
              <input
                className={`${styles.input} ${styles["name-input"]}`}
                type="text"
              />
              <label className={styles.label} htmlFor="firstName">
                {" "}
                First Name <span className={styles.asterik}>*</span>
              </label>
            </div>
            <div className={styles["input-section"]}>
              <input
                className={`${styles.input} ${styles["name-input"]}`}
                type="text"
              />
              <label className={styles.label} htmlFor="lastName">
                {" "}
                Last Name <span className={styles.asterik}>*</span>
              </label>
            </div>
          </div>

          <div className={styles["input-section"]}>
            <input className={styles.input} type="email" />
            <label className={styles.label} htmlFor="email">
              {" "}
              Email <span className={styles.asterik}>*</span>
            </label>
          </div>
          <div className={styles["input-section"]}>
            <input className={styles.input} type="password" />
            <label className={styles.label} htmlFor="password">
              {" "}
              Password <span className={styles.asterik}>*</span>
            </label>
          </div>
          <div className={styles["input-section"]}>
            <input className={styles.input} type="password" />
            <label className={styles.label} htmlFor="confirmPassword">
              {" "}
              Confirm Password <span className={styles.asterik}>*</span>
            </label>
          </div>
          <div className={styles["cta-section"]}>
            <button className={styles["sign-up"]}>SIGN UP</button>
            <div className={styles.existing}>
              Have an account already?{" "}
              <span
                onClick={() => navigate("/signin")}
                className={styles.signin}
              >
                Sign In
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
