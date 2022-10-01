import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUvkgnhWRZF9bZPbGyaoBZkxVRpRGVytE",
  authDomain: "clone-8773f.firebaseapp.com",
  projectId: "clone-8773f",
  storageBucket: "clone-8773f.appspot.com",
  messagingSenderId: "425001699312",
  appId: "1:425001699312:web:726067d7e49e9f28d97f35",
  measurementId: "G-B6C7LKRLYW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
