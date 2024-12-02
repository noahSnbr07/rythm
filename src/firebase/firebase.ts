import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8i3lMooyZojjwu3nXDAZupHfZZkhjy7s",
  authDomain: "rythm-community.firebaseapp.com",
  projectId: "rythm-community",
  storageBucket: "rythm-community.firebasestorage.app",
  messagingSenderId: "65966736361",
  appId: "1:65966736361:web:3d3f59a67efbdc3ade4178",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore();

export { app, storage, firestore };
