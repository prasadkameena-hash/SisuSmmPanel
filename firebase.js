// FIREBASE CONFIGURATION & INITIALIZATION
const firebaseConfig = {
  apiKey: "AIzaSyBcS2g7qg4_64NjXBCtHWRRM2FIQXLFlwM",
  authDomain: "sisu-smm-panel-80877.firebaseapp.com",
  databaseURL: "https://sisu-smm-panel-80877-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sisu-smm-panel-80877",
  storageBucket: "sisu-smm-panel-80877.firebasestorage.app",
  messagingSenderId: "836409364096",
  appId: "1:836409364096:web:d326751301d57206706065",
  measurementId: "G-LZ9ZWGRVSR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Auth & DB globally
const auth = firebase.auth();
const db = firebase.database();

// ImgBB API Key (Global)
const IMGBB_KEY = "172dabb7ec93ead71d6b9e5631f3155d";

console.log("Firebase Connected via firebase.js");