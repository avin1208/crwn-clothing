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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            }) 
        }  catch (error){
           console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

      return await batch.commit();
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;