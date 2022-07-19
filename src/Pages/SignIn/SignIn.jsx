import { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./SignIn.module.css";
import { ReactComponent as Google } from "../../assets/google-plus-g-brands.svg";
import { ReactComponent as Logo } from "../../assets/DM-catering new Logo.svg";
import { useNavigate } from "react-router-dom";

import { auth, signUserIn } from "../../Firebase/firebase.utils";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/userSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const { email, password } = loginDetails;
    console.log(loginDetails);
    if (email && password) {
      signUserIn(email, password);
      setLoginDetails({
        email: "",
        password: "",
      });
      navigate("/");
    } else {
      return;
    }
  };

  const { email, password } = loginDetails;

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
            <input
              onChange={handleChange}
              className={styles.input}
              type="email"
              name="email"
              value={email}
              required
            />
            <label className={styles.label} htmlFor="email">
              Email
            </label>
          </div>
          <div className={styles["input-section"]}>
            <input
              onChange={handleChange}
              className={styles.input}
              type="password"
              name="password"
              value={password}
              required
            />
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
