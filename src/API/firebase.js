import firebase from 'firebase';

const firebaseConfig={
    apiKey: "AIzaSyDq4a8RVBoUah55Z_aHsu6ph0XsOl7j4ZU",
    authDomain: "maxwin-289db.firebaseapp.com",
    databaseURL: "https://maxwin-289db.firebaseio.com",
    projectId: "maxwin-289db",
    storageBucket: "maxwin-289db.appspot.com",
    messagingSenderId: "1067066841229",
    appId: "1:1067066841229:web:27c19a67a31a39e85b2ac4"
}

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db=app.firestore();
