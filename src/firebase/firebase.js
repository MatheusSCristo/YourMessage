
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyDD4urg6eE2W5GpDs4Mp1_Wx8AxpchY5uo",
  authDomain: "yourmessage-91925.firebaseapp.com",
  projectId: "yourmessage-91925",
  storageBucket: "yourmessage-91925.appspot.com",
  messagingSenderId: "538135518428",
  appId: "1:538135518428:web:057f0ebf0a7c3da270a819"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const database = getDatabase(app)
export const storage = getStorage(app);
