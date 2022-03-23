import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAkAI9sWOXbePzyqNw7rlcmBdVZJxR_8tw",
  authDomain: "uber-clone-7a4c0.firebaseapp.com",
  projectId: "uber-clone-7a4c0",
  storageBucket: "uber-clone-7a4c0.appspot.com",
  messagingSenderId: "237658929610",
  appId: "1:237658929610:web:4edf71afe43de9ecbbf733"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth}