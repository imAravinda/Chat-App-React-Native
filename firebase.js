import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDB1x_JZJGtYssGDenFhgrH6lT_J7KQmY8",
  authDomain: "m-chat-79f18.firebaseapp.com",
  projectId: "m-chat-79f18",
  storageBucket: "m-chat-79f18.appspot.com",
  messagingSenderId: "238295924676",
  appId: "1:238295924676:web:7959c1cdf27d7f80dbee91"
};

// Initialize Firebase
let app
if(firebase.apps.length === 0)
{
    app = firebase.initializeApp(firebaseConfig);
}
else
{
    app=firebase.app()
}
const db = app.firestore();
const auth = firebase.auth();
export {db,auth};