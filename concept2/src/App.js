import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; // Import Firebase Auth functions
import { app, firestore } from './firebase/config'; // Import your Firebase configuration
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'; // Import Firestore methods

function App() {
  const signInWithGoogle = () => {
    const auth = getAuth(); // Initialize Auth
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // User signed in successfully
        const user = result.user;
        console.log('Logged in user:', user);
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
      });
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          getDocs(collection(firestore, 'products')) // Access Firestore collection
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                console.log(doc.data());
              });
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
        }}
      >
        show data
      </button>

      <button style={{ color: 'green' }}
        onClick={() => {
          addDoc(collection(firestore, 'products'), { name: 'vivo', price: '20000' }) // Access Firestore collection
            .then((docId) => {
              console.log(docId);
            })

        }}
      >
        add data
      </button>

      <button
        style={{ color: 'red' }}
        onClick={() => {
          // Create a reference to the document
          const documentRef = doc(firestore, 'products', 'xi9pXFeTpFUSt2dm7n3Z');

          deleteDoc(documentRef)
            .then(() => {
              console.log('Document successfully deleted!');
            })
            .catch((error) => {
              console.error('Error deleting document: ', error);
            });
        }}
      >
        Delete Data
      </button>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default App;
