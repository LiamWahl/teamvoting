import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCK_Q1E5OgoUYGSgxfOOcl_wjTwiOfOpbI",
    authDomain: "team-1897f.firebaseapp.com",
    projectId: "team-1897f",
    storageBucket: "team-1897f.appspot.com",
    messagingSenderId: "422370184343",
    appId: "1:422370184343:web:1da061930055ec25afadd2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



export default firebase.database();