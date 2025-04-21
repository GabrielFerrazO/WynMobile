import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC9vEUhs5BIjWLaeaaB9-8DUpHeKUAuh2s",
  authDomain: "wynmobile-9cefb.firebaseapp.com",
  projectId: "wynmobile-9cefb",
  storageBucket: "wynmobile-9cefb.appspot.com",
  messagingSenderId: "835178496817",
  appId: "1:835178496817:android:ca02135267a003104e2610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; 