// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlDc_hAFkcyNZ44Vavye-mh7ll_M3uomc",
  authDomain: "fir-auth-bf816.firebaseapp.com",
  projectId: "fir-auth-bf816",
  storageBucket: "fir-auth-bf816.appspot.com",
  messagingSenderId: "293195912910",
  appId: "1:293195912910:web:7b9c995a0a2e50c52da29f"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()

export { auth };
