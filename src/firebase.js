import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword  } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCdbjgQlDDhC_n9MBwXxufkgOS9JCFJuNY",
  authDomain: "ace-lotus-354818.firebaseapp.com",
  projectId: "ace-lotus-354818",
  storageBucket: "ace-lotus-354818.appspot.com",
  messagingSenderId: "892153572695",
  appId: "1:892153572695:web:72d85328fbf248b1e4e212"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export const login = async (email,password) =>{
    try{
    const response = await signInWithEmailAndPassword(auth,email,password)
    console.log(response.user)
    }
    catch(err){
        alert(err.message)
    }
}

