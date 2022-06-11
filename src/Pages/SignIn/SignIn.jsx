import Header from "../../components/Header/Header";
import styles from "./SignIn.module.css";
import { ReactComponent as Google } from "../../assets/google-plus-g-brands.svg";
import { ReactComponent as Logo } from "../../assets/DM-catering new Logo.svg";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase.utils";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {};

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
          <button onClick={handleSignIn} className={styles.signin}>
            SIGN IN
          </button>
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
        </div>
      </div>
    </div>
  );
};

export default SignIn;
