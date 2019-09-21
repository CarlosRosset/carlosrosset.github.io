// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQnq12UWEk5yDP4LDyLKYLzcQvrbxfihM",
    authDomain: "rajus-c8a95.firebaseapp.com",
    databaseURL: "https://rajus-c8a95.firebaseio.com",
    projectId: "rajus-c8a95",
    storageBucket: "rajus-c8a95.appspot.com",
    messagingSenderId: "15843682947",
    appId: "1:15843682947:web:9f36ecb060b3fb07d709b6"
};

// Initialize Firebase - "default"
var defaultProject = firebase.initializeApp(firebaseConfig);

// Teste
console.log(defaultProject.name);

// https://firebase.google.com/docs/web/setup?authuser=0#namespace
// Option 1: Access Firebase services via the defaultProject variable
var defaultStorage = defaultProject.storage();
var defaultDatabase = defaultProject.database();