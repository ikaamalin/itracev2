import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDN1Yx-PR958_NyaDzWDDFlMeADrFSSWv8',
  authDomain: 'iium-itrace.firebaseapp.com',
  databaseURL: 'https://iium-itrace-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'iium-itrace',
  storageBucket: 'iium-itrace.appspot.com',
  messagingSenderId: '428418401083',
  appId: '1:428418401083:android:cce3f58b1e53a811112d1e',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };