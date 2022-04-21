// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBGkLU9NWzq6WKTw2M8QG2JvoSpAp6322Q',
  authDomain: 'contact-list-48852.firebaseapp.com',
  projectId: 'contact-list-48852',
  storageBucket: 'contact-list-48852.appspot.com',
  messagingSenderId: '1018914789004',
  appId: '1:1018914789004:web:45852d22ffdc1b935e4da9',
  measurementId: 'G-GP341DEBHF',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    return onAuthStateChanged(
      auth,
      (user) => {
        resolve(user);
      },
      (error) => {
        reject(error);
      },
    );
  });
};

export { getCurrentUser };
