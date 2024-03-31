// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZCoNGDsvDxF64nKPy4FBc8OcK4SaZwRw",
  authDomain: "fir-react-mohamilon-4d8ed.firebaseapp.com",
  projectId: "fir-react-mohamilon-4d8ed",
  storageBucket: "fir-react-mohamilon-4d8ed.appspot.com",
  messagingSenderId: "218099361218",
  appId: "1:218099361218:web:d3a79e358bc396fc54e25b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;