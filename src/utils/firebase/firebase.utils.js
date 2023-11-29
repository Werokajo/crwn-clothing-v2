import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVyjbmm4LL1d9J_Yz7lqdnSB35A7_VJ-U",
    authDomain: "crwn-clothing-db-2a101.firebaseapp.com",
    projectId: "crwn-clothing-db-2a101",
    storageBucket: "crwn-clothing-db-2a101.appspot.com",
    messagingSenderId: "274591182429",
    appId: "1:274591182429:web:571dbe943a8da66f9f27b4"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);