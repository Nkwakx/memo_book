import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqYXE8V9joJ4Y863_CL_ASwcl6rGSCI1o",
    authDomain: "memo-book-b5df5.firebaseapp.com",
    projectId: "memo-book-b5df5",
    storageBucket: "memo-book-b5df5.appspot.com",
    messagingSenderId: "214075403195",
    appId: "1:214075403195:web:9d11dacd297321ef9ab29e",
    measurementId: "G-G2S6868W5F"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };