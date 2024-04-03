import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDN9a72UvPGXy9iJLtJUWd6_Gu-X3zMfTI",
  authDomain: "spotifyclone-99fa1.firebaseapp.com",
  projectId: "spotifyclone-99fa1",
  storageBucket: "spotifyclone-99fa1.appspot.com",
  messagingSenderId: "25593235688",
  appId: "1:25593235688:web:7111ba3a9f346d37eae15d",
  measurementId: "G-6C43VZEXZH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);