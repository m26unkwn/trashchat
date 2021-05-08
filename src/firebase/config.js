import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEjBJmMhnVBGB4l_VaJWTWnVhTIaMOyYM",
  authDomain: "fir-chat-2e72a.firebaseapp.com",
  projectId: "fir-chat-2e72a",
  storageBucket: "fir-chat-2e72a.appspot.com",
  messagingSenderId: "712895950144",
  appId: "1:712895950144:web:2fa495d582f69827791ea5",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { fireStore, timeStamp, auth };
