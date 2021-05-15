import firebase from 'firebase';
import 'firebase/database' ;

const firebaseConfig = {
    apiKey: "AIzaSyBgHhF2vY9Q73dVodQyFsQ4Mbgx8gBox4Y",
    authDomain: "twitter-clone-14a86.firebaseapp.com",
    projectId: "twitter-clone-14a86",
    storageBucket: "twitter-clone-14a86.appspot.com",
    messagingSenderId: "378846633640",
    appId: "1:378846633640:web:e90a5971f0338498c66c9d",
    measurementId: "G-YXQ7XWZZN4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();

  export default db;