import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(user);
            }
            setIsLoading(false);
        });

        return () => unSubscribe;
    }, [auth, user])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser('');
        })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        googleSignIn,
        logOut,
        isLoading,
        error
    }
}

export default useFirebase;