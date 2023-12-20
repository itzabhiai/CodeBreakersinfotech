import { initializeApp } from
 
"firebase/app";
import { getFirestore } from
 
"firebase/firestore";
import { getStorage } from
 
"firebase/storage";
import { getAuth } from
 
"firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS3Vw3Nxgbo4alqJljKHiPk1imN0o_0Fs",
  authDomain: "textphoto-48149.firebaseapp.com",
  projectId: "textphoto-48149",
  storageBucket: "textphoto-48149.appspot.com",
  messagingSenderId: "483201101560",
  appId: "1:483201101560:web:022987b52930ea15b6950d",
};

const app = initializeApp(firebaseConfig);

const textdb = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { textdb, storage, auth, app };
export default firebaseConfig;