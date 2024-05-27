import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// const {
//   initializeAppCheck,
//   ReCaptchaV3Provider,
// } = require("firebase/app-check");

const firebaseConfig = {
  apiKey: "AIzaSyAZETb4QwjdFoFytTQ7LC4_lyvktSZXmcw",
  authDomain: "employee-a0b42.firebaseapp.com",
  databaseURL: "https://employee-a0b42-default-rtdb.firebaseio.com",
  projectId: "employee-a0b42",
  storageBucket: "employee-a0b42.appspot.com",
  messagingSenderId: "686308370974",
  appId: "1:686308370974:web:da07753408b4218ae4dc0f",
  measurementId: "G-T5GBT1FTF6"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const rtdb = getDatabase(app);

// const appCheck = initializeAppCheck(app, {
//   // FIREBASE_APPCHECK_DEBUG_TOKEN: true,
//   provider: new ReCaptchaV3Provider(
//     process.env.REACT_APP_FIREBASE_APP_CHECK_TOKEN
//   ),
//   isTokenAutoRefreshEnabled: true,
// });

export { db, auth, rtdb };
