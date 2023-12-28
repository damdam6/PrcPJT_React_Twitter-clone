import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDibj_hdex0D6xizg4U0W_1R6RhuwbopMo',
  authDomain: 'nwitter-reloaded-64441.firebaseapp.com',
  projectId: 'nwitter-reloaded-64441',
  storageBucket: 'nwitter-reloaded-64441.appspot.com',
  messagingSenderId: '172569861513',
  appId: '1:172569861513:web:2070cbf7fc225bcfb3d558',
  measurementId: 'G-RJ8KD5BM94',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
