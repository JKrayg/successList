import * as firebase from "firebase/app";
import "firebase/auth";


const app = firebase.initializeApp({
    apiKey: "AIzaSyALPj3f65QoMuNBhbUzKTa6uU-Zbnr4y6g",
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})
console.log(app.options.apiKey)
export default app;