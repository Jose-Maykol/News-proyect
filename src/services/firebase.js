
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUscrWSCu63pqFbazq-UfUsYNIZ99_xvw",
  authDomain: "news-proyect-dfc18.firebaseapp.com",
  projectId: "news-proyect-dfc18",
  storageBucket: "news-proyect-dfc18.appspot.com",
  messagingSenderId: "649868766180",
  appId: "1:649868766180:web:19bd14cc77d093dd4675f1",
  measurementId: "G-QQC02W41WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}