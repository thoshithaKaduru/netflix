import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCiz3jDotIunZyYUcGyt3X1AEoX7KY8Ewo",
  authDomain: "netflix-24cb9.firebaseapp.com",
  projectId: "netflix-24cb9",
  storageBucket: "netflix-24cb9.appspot.com",
  messagingSenderId: "754372649051",
  appId: "1:754372649051:web:ff7202bff98d33ca851f7e"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
