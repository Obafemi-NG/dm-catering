import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

import { onAuthStateChanged } from "firebase/auth";
import firestore, { auth, createUserDocument } from "./Firebase/firebase.utils";
import { useEffect } from "react";
import { setCurrentUser } from "./redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        onSnapshot(doc(firestore, "users", `${user.uid}`), (doc) => {
          dispatch(setCurrentUser(doc.data()));
        });
      }
      console.log(user);
      setCurrentUser(user);
    });
    return unsub();
  }, [dispatch]);
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={currentUser ? <UserDashboard /> : <Home />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
