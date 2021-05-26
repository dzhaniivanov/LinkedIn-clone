import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCT3JmfaYhpemASv_SYsRo6UB2wd0e_j5w",
    authDomain: "linkedin-clone-5074f.firebaseapp.com",
    projectId: "linkedin-clone-5074f",
    storageBucket: "linkedin-clone-5074f.appspot.com",
    messagingSenderId: "14524227178",
    appId: "1:14524227178:web:08aacd87b485760347b413"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;