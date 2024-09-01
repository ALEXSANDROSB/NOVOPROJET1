// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhQ3zdNZ83_dddLhR7UQjYJXc3wdPLC0A",
    authDomain: "cadastro02-551ce.firebaseapp.com",
    projectId: "cadastro02-551ce",
    storageBucket: "cadastro02-551ce.appspot.com",
    messagingSenderId: "249658285130",
    appId: "1:249658285130:web:febd62fb8f6d6a539b9ab3",
    measurementId: "G-ZNVF4C9NJG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);