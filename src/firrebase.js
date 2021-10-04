// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAl1edA9FfII4a0vHzZ_4txBR8_YWYH1_U",
  authDomain: "learn-storage-db5ba.firebaseapp.com",
  projectId: "learn-storage-db5ba",
  storageBucket: "learn-storage-db5ba.appspot.com",
  messagingSenderId: "138386387700",
  appId: "1:138386387700:web:e92a4225b990a4e9cb64a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getStorage(app)
export {app, db}