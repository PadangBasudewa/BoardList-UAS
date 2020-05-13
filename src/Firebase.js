import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBBzF5HhU_IeSfb5OOlnV5U0sFSHWL8fWs",
    authDomain: "boardlist-fd77b.firebaseapp.com",
    databaseURL: "https://boardlist-fd77b.firebaseio.com",
    projectId: "boardlist-fd77b",
    storageBucket: "boardlist-fd77b.appspot.com",
    messagingSenderId: "425498675548",
    appId: "1:425498675548:web:af9deb6d7b1d7e83a2d999",
    measurementId: "G-SLRV9E71BR"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;