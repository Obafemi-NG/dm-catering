import Header from "../../components/Header/Header";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/DM-catering new Logo.svg";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["page-container"]}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles["page-content"]}>
        <div className={styles.logo}>
          <Logo height={100} width={100} />
        </div>
        <div className={styles["form-section"]}>
          <div className={styles.name}>
            <div className={styles["input-section"]}>
              <input
                className={`${styles.input} ${styles["name-input"]}`}
                type="text"
                required
              />
              <label className={styles.label} htmlFor="firstName">
                {" "}
                First Name
              </label>
            </div>
            <div className={styles["input-section"]}>
              <input
                className={`${styles.input} ${styles["name-input"]}`}
                type="text"
                required
              />
              <label className={styles.label} htmlFor="lastName">
                {" "}
                Last Name
              </label>
            </div>
          </div>

          <div className={styles["input-section"]}>
            <input className={styles.input} type="email" required />
            <label className={styles.label} htmlFor="email">
              {" "}
              Email
            </label>
          </div>
          <div className={styles["input-section"]}>
            <input className={styles.input} type="password" required />
            <label className={styles.label} htmlFor="password">
              {" "}
              Password
            </label>
          </div>
          <div className={styles["input-section"]}>
            <input className={styles.input} type="password" required />
            <label className={styles.label} htmlFor="confirmPassword">
              {" "}
              Confirm Password
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
