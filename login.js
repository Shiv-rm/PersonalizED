import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3Rsym5OJePWddS-4Glu0dSkvz6YV1JRQ",
  authDomain: "personalised-dfb4d.firebaseapp.com",
  projectId: "personalised-dfb4d",
  storageBucket: "personalised-dfb4d.firebasestorage.app",
  messagingSenderId: "22999873787",
  appId: "1:22999873787:web:d0dc848c5a479509cb185e",
  measurementId: "G-WDYERYMZDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Email/Password Login
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Logged in successfully!");
      console.log("User:", userCredential.user);
      // Redirect to another page after successful login
      window.location.href = "grand.html"; // Adjust this as needed
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
      console.error("Error:", error);
    });
});

// Google Login
document.getElementById("google-sign-in-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission
  
  const provider = new GoogleAuthProvider();
  
  signInWithPopup(auth, provider)
    .then((result) => {
      // Google sign-in successful
      const user = result.user;
      alert(`Welcome, ${user.displayName}!`);
      console.log("User:", user);
      // Redirect to another page after successful Google login
      window.location.href = "grand.html"; // Adjust this as needed
    })
    .catch((error) => {
      // Handle Errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
      console.error("Error:", error);
    });
});
