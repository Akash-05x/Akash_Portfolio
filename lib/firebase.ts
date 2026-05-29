import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA6jQQ0a3mFJIhK6DjHRxyVYpEEYVjis94",
  authDomain: "myportfolio-134df.firebaseapp.com",
  projectId: "myportfolio-134df",
  storageBucket: "myportfolio-134df.firebasestorage.app",
  messagingSenderId: "616046084565",
  appId: "1:616046084565:web:9b7a3ec33603a5e6bf3d5c",
  measurementId: "G-5K05YZHWP6"
};

const app =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0];

const db = getFirestore(app);

let analytics: ReturnType<typeof getAnalytics> | null = null;

if (typeof window !== 'undefined') {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, analytics };