import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: process.env.apiKey,
	authDomain: process.env.authDomain,
	projectId: process.env.projectId,
	storageBucket: process.env.storageBucket,
	messagingSenderId: process.env.messagingSenderId,
	appId: process.env.appId, 
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { auth };
export default db;
