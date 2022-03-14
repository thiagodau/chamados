import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

import configFirebase from '../configFirebase.json'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: configFirebase.REACT_APP_API_KEY,
  authDomain: configFirebase.REACT_APP_AUTH_DOMAIN,
  projectId: configFirebase.REACT_APP_PROJECT_ID,
  storageBucket: configFirebase.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: configFirebase.REACT_APP_MESSAGING_SENDER_ID,
  appId: configFirebase.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);