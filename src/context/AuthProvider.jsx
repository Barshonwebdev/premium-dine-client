import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config';
export const AuthContext=createContext(null);
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const authInfo={
        user,loading
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