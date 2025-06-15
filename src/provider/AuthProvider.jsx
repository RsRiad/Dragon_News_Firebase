import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut,signInWithEmailAndPassword  } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true);
  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut =()=>{
    return signOut(auth);
  }
  useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    });

    return ()=>{
        unSubscribe();
    }
  },[])

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    loginUser,
    loading,
    setLoading,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
