import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBm7w7FsATcuSVzCCErDG-qqRH88RUOOY",
  authDomain: "myportfolio-contact-6c676.firebaseapp.com",
  databaseURL:
    "https://myportfolio-contact-6c676-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myportfolio-contact-6c676",
  storageBucket: "myportfolio-contact-6c676.appspot.com",
  messagingSenderId: "315259104469",
  appId: "1:315259104469:web:1bae9b853844c2856b065c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
