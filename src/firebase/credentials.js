// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcaNHT5EFPUxZP9RHvnv6_bB321sehByo",
  authDomain: "formjson-fe356.firebaseapp.com",
  projectId: "formjson-fe356",
  storageBucket: "formjson-fe356.appspot.com",
  messagingSenderId: "41444705371",
  appId: "1:41444705371:web:8adb6af4e1100885332b7e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export default firebaseApp;