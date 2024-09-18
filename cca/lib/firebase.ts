// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWOgi4OkzFxei2RtpKJ7FSTfKPzCheUVk",
  authDomain: "cropcareai.firebaseapp.com",
  projectId: "cropcareai",
  storageBucket: "cropcareai.appspot.com",
  messagingSenderId: "127518057716",
  appId: "1:127518057716:web:a6391ba19aa6cb89fb6aa1"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};