import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import  App  from './App';
import { FirebaseContext } from './context/firebase';



const config = {
    apiKey: "AIzaSyAqilMRnMRfOCzJcRyCEQtzzu43ARjj-QQ",
    authDomain: "netflix-hammad.firebaseapp.com",
    databaseURL: "https://netflix-hammad.firebaseio.com",
    projectId: "netflix-hammad",
    storageBucket: "netflix-hammad.appspot.com",
    messagingSenderId: "810176171169",
    appId: "1:810176171169:web:333c78ef6fc291bb9574e0"
  };

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);

