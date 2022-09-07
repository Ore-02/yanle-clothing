import { initializeApp } from 'firebase/app';
import { 
     getAuth, 
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider ,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged,

    } from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs   
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBwazVE0_m-2ROnIEQfULRmpkO-GT6ymWU",
    authDomain: "yanle-clothing.firebaseapp.com",
    projectId: "yanle-clothing",
    storageBucket: "yanle-clothing.appspot.com",
    messagingSenderId: "637445281958",
    appId: "1:637445281958:web:362a171248038bb9c33c67"
  };

  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const addColletionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    // creating a batch so that we can add all of our objects to the collectio in one succesful transcation
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) =>{
        const { title } = object
        const docRef = doc(collectionRef, title.toLowerCase());
        batch.set(docRef, object)
    });

    await batch.commit();
    console.log('done')
}  

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnaphot) => {
        const { title, items } = docSnaphot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})

    return categoryMap;
}



export const createUserDocumentFromAuth = async (
    userAuth, additionalInformation = {}
    ) => {
    const userDocRef = doc(db, 'users', userAuth.uid); 
    
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const createdAt = new Date();
        const { displayName, email } = userAuth;
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
             console.log('error creating the user', error)
        }
    }


    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => {onAuthStateChanged(auth, callback)}