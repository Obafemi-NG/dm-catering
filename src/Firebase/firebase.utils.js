import { initializeApp } from "firebase/app";
import {
  doc,
  setDoc,
  getDoc,
  getFirestore,
  addDoc,
  collection,
  where,
  query,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqaVDGvHwl8SE9HUc3I-NClfL8ZL9-8dE",
  authDomain: "dm-catering.firebaseapp.com",
  projectId: "dm-catering",
  storageBucket: "dm-catering.appspot.com",
  messagingSenderId: "216363865772",
  appId: "1:216363865772:web:743b6511bbffb9119b7109",
  measurementId: "G-1ZHE1K3K2P",
};

const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export default firestore;
const provider = new GoogleAuthProvider();

// export const registerNewUser = async (email, password, displayName) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     console.log(user);
//     await addDoc(collection(firestore, "users"), {
//       uid: user.uid,
//       email,
//       displayName,
//     });
//   } catch (error) {
//     console.log(error);
//     alert(`Error creating new user. ${error.message}`);
//   }
// };

export const googleSignIn = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    const userQuery = query(
      collection(firestore, "users"),
      where("uid", "==", user.uid)
    );
    const userDoc = await getDoc(userQuery);
    if (userDoc.docs.length === 0) {
      await addDoc(collection(firestore, "users"), {
        uid: user.uid,
        displayName: user.displayName,
        provider: "google",
        email: user.email,
      });
    }
    console.log(user);
  } catch (error) {
    console.log(error);
    alert(`Error signing user in. ${error.message}`);
  }
};

export const signUserOut = () => {
  signOut(auth);
};

export const resetUserPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent to your email!");
  } catch (error) {
    console.log(error);
    alert(`an error occured. ${error.message}`);
  }
};

export const signUserIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(`error signing user in. ${error.message}`);
  }
};

export const createUserDocument = async (userAuth, displayName) => {
  if (!userAuth) return;

  // const userRef = doc(collection(firestore, "users"));
  const userRef = doc(firestore, "users", `${userAuth.uid}`);
  const snapShot = await getDoc(userRef);
  if (!snapShot.exists()) {
    const { uid, email } = userAuth;
    // const docRef = doc(firestore, "users", `${uid}`);
    const payload = { displayName, email };
    try {
      // await setDoc(docRef, payload);
      await addDoc(collection(firestore, "users"), payload);
    } catch (error) {
      console.log(error);
    }
  } else return;
};
