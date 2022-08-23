// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyBH0kXfYpkc9CC_7KHmUXL3Cp6iavKrCAc",
  authDomain: "rundle-xing-budget-app.firebaseapp.com",
  projectId: "rundle-xing-budget-app",
  storageBucket: "rundle-xing-budget-app.appspot.com",
  messagingSenderId: "475519671791",
  appId: "1:475519671791:web:7e676e989babc638b22a1a",
  measurementId: "G-STRJQDYCTP"
};

// Initialize Firebase
const app = initializeApp(config);
const analytics = getAnalytics(app);

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}