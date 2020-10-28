import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBJqKyzEvnQFKQc-y4K31zbgj9rssXHz4Y",
  authDomain: "react-native-97bfa.firebaseapp.com",
  databaseURL: "https://react-native-97bfa.firebaseio.com",
  projectId: "react-native-97bfa",
  storageBucket: "react-native-97bfa.appspot.com",
  messagingSenderId: "961930425654",
  appId: "1:961930425654:web:cdbde3f2ff278ed214ef97",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
