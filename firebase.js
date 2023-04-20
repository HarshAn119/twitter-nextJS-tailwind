import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'twitter-nextjs-73e52.firebaseapp.com',
  projectId: 'twitter-nextjs-73e52',
  storageBucket: 'twitter-nextjs-73e52.appspot.com',
  messagingSenderId: '511157084263',
  appId: '1:511157084263:web:83a6463916f7c3b2dff4c2',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
