import { initializeApp } from "firebase/app";
import { 
    getFirestore, collection
  } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCZiRlmq9PGzOH65FLILt53JlMDiuVt02c",
  authDomain: "robert-burcea-cf5bd.firebaseapp.com",
  projectId: "robert-burcea-cf5bd",
  storageBucket: "robert-burcea-cf5bd.appspot.com",
  messagingSenderId: "395958863617",
  appId: "1:395958863617:web:bb78efd4ad816886f9fd00",
  measurementId: "G-91QMHX33ND"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app }
export default db;