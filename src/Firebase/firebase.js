import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, collection, addDoc, getDocs, updateDoc } from 'firebase/firestore';
import { deleteDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { setDoc } from "firebase/firestore";


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

export const db = getFirestore();


export const getUserInformation = async (userId) => {
  const userDocRef = doc(db, "users", userId);
  const userSnapshot = await getDoc(userDocRef);
  const userData = userSnapshot.data();

  return userData;

}

export const SignInUser = async (email, password) => {
  if (!email || !password) return;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    // Log more specific error information here
    console.error('Error signing in:', error);
    throw error; // rethrow to handle it in the calling function
  }

};


export const SignOutUser = async () => {
  return await signOut(auth)
}


export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);



export const AddNewService = async (formData) => {

  console.log("Recieved", formData)
  const serviceDocRef = doc(db, "Properties", formData.name);
  const serviceSnapshot = await getDoc(serviceDocRef);
  const currentDate = Date.now();
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-CA');

  if (!serviceSnapshot.exists()) {

    try {

      await setDoc(serviceDocRef, {
        name: formData.name,
        price: formData.price,
        location: formData.location,
        description: formData.description,
        images: formData.images,
        published: formattedDate,
        city: formData.city,
        type: formData.type
      });
      console.log("successfully added")

    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

};

