import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  // your config
  apiKey: "AIzaSyD5eiJ2HYX6UaaKOg0oVwNrkdm20uGEzKw",
  authDomain: "react-firebase-chatapp-ab3a9.firebaseapp.com",
  projectId: "react-firebase-chatapp-ab3a9",
  storageBucket: "react-firebase-chatapp-ab3a9.appspot.com",
  messagingSenderId: "226568333339",
  appId: "1:226568333339:web:562f08d719c77956edf0be",
  measurementId: "G-ZRSQ7CB0N9",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Giga Chat</h1>
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new FirebaseError.auth.GoogleAuthProvider();
  };
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function SignOut() {
  return (
    auth.currentUser && (
      <button
        onClick={() => {
          auth.sighOut();
        }}
      >
        Sign Out
      </button>
    )
  );
}

export default App;
