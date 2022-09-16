import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as googleSignOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import FavoriteServices from "../services/favorite.services";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = () => {
    return googleSignOut(auth);
  };

  const signUp = (email, password, firstName, lastName) => {
    const displayName = `${firstName} ${lastName}`;
    return createUserWithEmailAndPassword(auth, email, password).then(
      (result) => {
        updateProfile(result.user, { displayName });
      }
    );
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setUser(currentuser);
        FavoriteServices.getFavoritesRequest(currentuser.uid).then((result) => {
          console.log("favorites", result[0]);
          setFavorites(result[0].favorites);
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ signIn, signOut, signUp, user, favorites }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuthContext = () => {
  return useContext(AuthContext);
};
