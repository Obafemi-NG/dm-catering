import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserDocument } from "./Firebase/firebase.utils";
import { useEffect } from "react";
import { setCurrentUser } from "./redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await createUserDocument(user);
        dispatch(setCurrentUser(userData));
      }
    });
    return unsub;
  }, [dispatch]);
  const currentUser = useSelector((state) => {
    return state.user.currentUser;
  });
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
