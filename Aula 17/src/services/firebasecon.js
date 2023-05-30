import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvwGmb12EYFzL10w6TGqZusbpIWjLEf94",
  authDomain: "aulatdm2023.firebaseapp.com",
  projectId: "aulatdm2023",
  storageBucket: "aulatdm2023.appspot.com",
  messagingSenderId: "15594265028",
  appId: "1:15594265028:web:c08cb3436b38ab42a16c91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);