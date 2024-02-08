
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBuyXYYVo9oYsREBOlhzdPEWqOzjIRWRNw",
  authDomain: "doubtpulse.firebaseapp.com",
  projectId: "doubtpulse",
  storageBucket: "doubtpulse.appspot.com",
  messagingSenderId: "337892905174",
  appId: "1:337892905174:web:759f6702f65501142a3977",
  measurementId: "G-GY3B83PQZG"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};
