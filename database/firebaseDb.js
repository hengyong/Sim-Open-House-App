import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC_0ovmUPD2YVBj9cLLeK00DsMqAQS1fT8",
    authDomain: "open-house-fa2ed.firebaseapp.com",
    databaseURL: "https://open-house-fa2ed.firebaseio.com",
    projectId: "open-house-fa2ed",
    storageBucket: "open-house-fa2ed.appspot.com",
    messagingSenderId: "127368247998",
    appId: "1:127368247998:web:4ac494e18d9d3bcbb27cef",
    measurementId: "G-QW68RKTB8J"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

firebase.firestore();

export default firebase;