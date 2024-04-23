import { 
    createUserWithEmailAndPassword,signInWithEmailAndPassword, 
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import { auth } from "../../config/firebase.config";

export const doCreateUserWithEmailAndPassword = async (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
};
export const doSignInWithEmailAndPassword = async (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);
    return result; 
}

export const doSignOut = () => {
    return auth.signOut();
}