import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';
export const AuthContext=createContext(null);
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('current user :',currentUser);
            setLoading(false)
        });
        return ()=>{
            return unsubscribe();
        }
    },[])
 
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
        
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(email,password);
    }

    const logout=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const authInfo={
        user,loading, createUser,signInUser,logout
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
              {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;