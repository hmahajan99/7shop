import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCEByRdFMO-89MblmnpuHQ3lhC_L5pPCTc",
    authDomain: "shop-23621.firebaseapp.com",
    databaseURL: "https://shop-23621.firebaseio.com",
    projectId: "shop-23621",
    storageBucket: "",
    messagingSenderId: "1081063070985",
    appId: "1:1081063070985:web:a6e8a454a9716887"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;