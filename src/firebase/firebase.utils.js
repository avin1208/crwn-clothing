import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyA8Nje7aL2GVukPtDvEEJRYDMw8ULORz2s",
    authDomain: "crwn-am.firebaseapp.com",
    projectId: "crwn-am",
    storageBucket: "crwn-am.appspot.com",
    messagingSenderId: "1034819106995",
    appId: "1:1034819106995:web:e8fca01a6acbee3262d8c6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promot: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;