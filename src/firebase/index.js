// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCVU8ptXFZmdcb_x_F1WaSaKJTn_YlZy4c',
  authDomain: 'crud-d6e67.firebaseapp.com',
  databaseURL: 'https://crud-d6e67-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'crud-d6e67',
  storageBucket: 'crud-d6e67.appspot.com',
  messagingSenderId: '289975812445',
  appId: '1:289975812445:web:e015f230c7c1b4142468b4',
  measurementId: 'G-JHDTGZBDX5'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {
    db
}