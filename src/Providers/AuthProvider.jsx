import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


   export const Authcontext = createContext(null);

   const auth = getAuth(app);

const AuthProvider = ({children}) => {
// const user = {displayName: 'Hasan'}
const [user,setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

const logOut =() =>{
    setLoading(true);
    return signOut(auth);
}

useEffect(() =>{
   const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        console.log('logged in user inside auth state observer', loggedUser);
        setUser(loggedUser);
        setLoading(false);
    })
    return () => {
         unsubscribe();
    }
}, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;