import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDZZ3HKrLMpJn3DgV2j9vKrhivfXZQwEXU",
  authDomain: "challenge-intercorp-7dc89.firebaseapp.com",
  projectId: "challenge-intercorp-7dc89",
  storageBucket: "challenge-intercorp-7dc89.appspot.com",
  messagingSenderId: "133705850887",
  appId: "1:133705850887:web:422162e016f989d9050aa2",
  measurementId: "G-M4SMV5D8B6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = collection(db, "list-persons");

export { database };
