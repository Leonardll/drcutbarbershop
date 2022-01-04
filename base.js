//import { getStorage, ref } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import { getStorage , ref, listAll } from "firebase/storage";


const API_KEY_BASE = process.env.NEXT_PUBLIC_API_KEY_BASE
const auth_domain = process.env.NEXT_PUBLIC_AUTH_DOMAIN
const databaseUrl = process.env.NEXT_PUBLIC_DATABASE_URL
const storageBucket = process.env.NEXT_PUBLIC_STORAGE_BUCKET
const messagingSender = process.env.NEXT_PUBLIC_MESSAGING_SENDER
const appId = process.env.NEXT_PUBLIC_APP_ID
const mesurementId = process.env.NEXT_PUBLIC_MESURMENT_ID

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = initializeApp({
  apiKey: API_KEY_BASE,
  authDomain: auth_domain,
  databaseURL: databaseUrl,
  storageBucket: storageBucket,
  // messagingSenderId: messagingSender,
  // appId: appId ,
  // measurementId: mesurementId,                                                           
});


// Get a reference to the storage service, which is used to create references in your storage bucket const storage = getStorage(firebase);
const storage = getStorage(firebaseConfig)
const getRef = ref
const getAllItems = listAll

export { storage, getRef, getAllItems}



