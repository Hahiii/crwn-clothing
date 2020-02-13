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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })

    } catch (error) {
      console.log('error creating user', error);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
