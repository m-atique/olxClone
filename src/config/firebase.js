import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDrC9KG2ng6xyqlK6dm_JBkDZ-xjTDehsw",
    authDomain: "olxeee.firebaseapp.com",
    databaseURL: "https://olxeee.firebaseio.com",
    projectId: "olxeee",
    storageBucket: "olxeee.appspot.com",
    messagingSenderId: "739370027867",
    appId: "1:739370027867:web:69b0b6b6c923fc96f8a87e",
    measurementId: "G-L4WY21RE97"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()


  
  export  {
     storage, firebase as default
   }
  