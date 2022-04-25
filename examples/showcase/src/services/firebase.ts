import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  addDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import Constants from "expo-constants";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.firebaseApiKey,
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// AUTHENTICATION // ---------------------------------------------------------
let user = auth.currentUser;

export const signUpWithEmail = async (
  fullName: string,
  email: string,
  pass: string
) => {
  try {
    let result = await createUserWithEmailAndPassword(auth, email, pass);
    user = result.user;
    await updateProfile(user, {
      displayName: fullName,
    });
    console.log(user);
    await addNewUser(fullName, email);
    return "success";
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const logInWithEmail = async (email: string, pass: string) => {
  try {
    let result = await signInWithEmailAndPassword(auth, email, pass);
    user = result.user;
    return "success";
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    user = auth.currentUser;
    console.log(user);
    return "success";
  } catch (e) {
    console.log(e);
  }
};

// FIRESTORE // --------------------------------------------------------------
const addNewUser = async (fullName: string, email: string) => {
  try {
    const userData = {
      full_name: fullName,

      email: email,
    };
    const docRef = await addDoc(collection(firestore, "users"), userData);
    console.log(docRef.id);
  } catch (e) {
    console.log(e);
  }
};

export const addProduct = async (itemName : string, category: string, description: string, price: string) => {
    try{
        const productData = {
            item_Name: itemName,
            Category: category,
            Description: description,
            Price: price,
        }
        const docRef = await addDoc(collection(firestore, "products"), productData);
        console.log(docRef.id);
        return "success";
    } catch (e) {
        console.log(e);
      }
}

export const getFullName = async () => {
  try {
    let fullName = "Temp";
    const q = query(
      collection(firestore, "users"),
      where("email", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data()["full_name"]);
      fullName = doc.data()["full_name"];
    });
    return fullName;
  } catch (e) {
    console.log(e);
  }
};

export const getItems = async () => {
  let products: object[] = []
  try{
    const q = query(collection(firestore,"products"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      products.push(doc.data())

    })
  }
  catch (e) {
    console.log(e);
  }
  return (products);
};

//TODO - "figure out how to add a picture"
// export const addPhoto = async () => {
//     try {

//     }
// }
