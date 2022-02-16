import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCRWBBeIIexSkGkgVgUnWu7DpuqaNkCKpM",
    authDomain: "crwn-aa.firebaseapp.com",
    projectId: "crwn-aa",
    storageBucket: "crwn-aa.appspot.com",
    messagingSenderId: "999961639463",
    appId: "1:999961639463:web:091be4b06a7b0401c36c02"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;