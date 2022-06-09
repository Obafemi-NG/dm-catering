import Header from "../../components/Header/Header";
import styles from "./SignIn.module.css";
import { ReactComponent as Google } from "../../assets/google-plus-g-brands.svg";
import { ReactComponent as Logo } from "../../assets/DM-catering new Logo.svg";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["page-container"]}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles["page-content"]}>
        <div className={styles.logo}>
          <Logo height={150} width={150} />
        </div>
        <div className={styles["form-section"]}>
          <div className={styles["input-section"]}>
            <input className={styles.input} type="email" required />
            <label className={styles.label} htmlFor="email">
              Email
            </label>
          </div>
          <div className={styles["input-section"]}>
            <input className={styles.input} type="password" required />
            <label className={styles.label} htmlFor="email">
              Password
            </label>
          </div>
        </div>
        <div className={styles["cta-section"]}>
          <button className={styles.signin}>SIGN IN</button>
          <div className={styles["no-account"]}>
            Do not have an account with us?{" "}
            <span
              onClick={() => navigate("/signup")}
              className={styles["sign-up"]}
            >
              {" "}
              Sign Up{" "}
            </span>
          </div>
          <div className={styles["google-container"]}>
            <div className={styles.or}>or</div>
            <button className={styles["google-signin"]}>
              Sign in with Google{" "}
              <span className={styles["google-logo"]}>
                {" "}
                <Google height={25} width={25} fill="white" />{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
