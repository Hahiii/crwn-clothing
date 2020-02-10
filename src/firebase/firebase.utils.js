import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCmq2j49nBWP-cHc6naDXxhiN-vPDHmgWA",
  authDomain: "nazim-db.firebaseapp.com",
  databaseURL: "https://nazim-db.firebaseio.com",
  projectId: "nazim-db",
  storageBucket: "nazim-db.appspot.com",
  messagingSenderId: "82662487937",
  appId: "1:82662487937:web:ceaf888b360399cfcc1a80"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
