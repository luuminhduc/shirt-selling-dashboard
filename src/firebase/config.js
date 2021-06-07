import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyALM7Y38tlBx4UqATtIuKvAcf0TwFqRJOU",
    authDomain: "shirt-selling-42573.firebaseapp.com",
    projectId: "shirt-selling-42573",
    storageBucket: "shirt-selling-42573.appspot.com",
    messagingSenderId: "75895232567",
    appId: "1:75895232567:web:e2532d41d8ba32049387b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export const storage = firebase.storage()

  export default firebase;

  