import firebase from 'firebase/app'
import 'firebase/auth'
const config = {
    apiKey: "AIzaSyAmcdpIWQi4-lkj2DtnyNhwNDXTTI0HB3M",
    authDomain: "test-login-d053d.firebaseapp.com",
    databaseURL: "https://test-login-d053d.firebaseio.com",
    projectId: "test-login-d053d",
    storageBucket: "test-login-d053d.appspot.com",
    messagingSenderId: "862673629889",
    appId: "1:862673629889:web:8d189cfb80126126f2da40"
};
const app = firebase.initializeApp(config);

export {app};