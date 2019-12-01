import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDHeX_Vje3meJZo5sWhTtSMZh0pdRmXFho',
  authDomain: 'pokedex-kirakosov.firebaseapp.com',
  databaseURL: 'https://pokedex-kirakosov.firebaseio.com',
  projectId: 'pokedex-kirakosov',
  storageBucket: 'pokedex-kirakosov.appspot.com',
  messagingSenderId: '212302423608',
  appId: '1:212302423608:web:0ef8376d94156c3ba128cd',
  measurementId: 'G-4FZPK8JQ36'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user: ', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
