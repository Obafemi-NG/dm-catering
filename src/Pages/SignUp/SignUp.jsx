import Header from "../../components/Header/Header";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/DM-catering new Logo.svg";

import {
  auth,
  createUserDocument,
  registerNewUser,
} from "../../Firebase/firebase.utils";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [details, setDetails] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, displayName } = details;
    if (password !== confirmPassword) {
      alert("password provided do not match");
    }
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(user);
    await createUserDocument(user, displayName);
    // await registerNewUser(email, password, displayName);
  };
  const { email, password, confirmPassword, displayName } = details;
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
                name="displayName"
                value={displayName}
                onChange={handleChange}
                required
              />
              <label className={styles.label} htmlFor="firstName">
                {" "}
                Full Name
              </label>
            </div>
          </div>

          <div className={styles["input-section"]}>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <label className={styles.label} htmlFor="email">
              {" "}
              Email
            </label>
          </div>
          <div className={styles["input-section"]}>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <label className={styles.label} htmlFor="password">
              {" "}
              Password
            </label>
          </div>
          <div className={styles["input-section"]}>
            <input
              className={styles.input}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              type="password"
              required
            />
            <label className={styles.label} htmlFor="confirmPassword">
              {" "}
              Confirm Password
            </label>
          </div>
          <div className={styles["cta-section"]}>
            <button onClick={handleSignUp} className={styles["sign-up"]}>
              SIGN UP
            </button>
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
