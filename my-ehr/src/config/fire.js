import firebase from 'firebase';




const config = {
  apiKey: "AIzaSyATOZyruRd9jZODpv-jICgtl1tUuw4ESWE",
  authDomain: "myehrbeta.firebaseapp.com",
  databaseURL: "https://myehrbeta.firebaseio.com",
  projectId: "myehrbeta",
  storageBucket: "myehrbeta.appspot.com",
  messagingSenderId: "706479482209"
};
const fire = firebase.initializeApp(config);
export default fire;