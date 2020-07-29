  
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAqilMRnMRfOCzJcRyCEQtzzu43ARjj-QQ",
    authDomain: "netflix-hammad.firebaseapp.com",
    databaseURL: "https://netflix-hammad.firebaseio.com",
    projectId: "netflix-hammad",
    storageBucket: "netflix-hammad.appspot.com",
    messagingSenderId: "810176171169",
    appId: "1:810176171169:web:333c78ef6fc291bb9574e0"
  };

const firebase = Firebase.initializeApp(config);
seedDatabase(firebase);

export { firebase };