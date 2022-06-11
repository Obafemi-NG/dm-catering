import { initializeApp } from "firebase/app";
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqaVDGvHwl8SE9HUc3I-NClfL8ZL9-8dE",
  authDomain: "dm-catering.firebaseapp.com",
  projectId: "dm-catering",
  storageBucket: "dm-catering.appspot.com",
  messagingSenderId: "216363865772",
  appId: "1:216363865772:web:743b6511bbffb9119b7109",
  measurementId: "G-1ZHE1K3K2P",
};

export const createUser = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(firestore, `users/${userAuth.id}`);
  const snapShot = await getDoc(userRef);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const docRef = doc(firestore, "users", `${userAuth.uid}`);
    const payload = { displayName, email, createdAt, ...additionalData };
    try {
      setDoc(docRef, payload);
    } catch (error) {
      console.log(error);
    }
    return docRef;
  }
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore();
export const auth = getAuth(firebaseApp);
export default firestore;
