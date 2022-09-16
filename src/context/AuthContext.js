import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as googleSignOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = () => {
    return googleSignOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuthContext = () => {
  return useContext(AuthContext);
};
