import { initializeApp } from "firebase/app";
import {doc, getDoc,getFirestore,collection,addDoc,getDocs, updateDoc} from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD0SG_OkjOq9JejF8FCgNmMUm8h-tTz5yM",
  authDomain: "gadooy-1f7be.firebaseapp.com",
  projectId: "gadooy-1f7be",
  storageBucket: "gadooy-1f7be.appspot.com",
  messagingSenderId: "517192318165",
  appId: "1:517192318165:web:978ab4266812f9a75b765c"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth();

const db =  getFirestore();


export const getUserInformation= async (userId)=>{
  const userDocRef = doc(db, "users", userId);
  const userSnapshot = await getDoc(userDocRef);
  const userData = userSnapshot.data();

    return userData;
         
}
  