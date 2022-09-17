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

  const readFavorites = async (userId) => {
    const favorites = await FavoriteServices.getFavoritesRequest(userId);
    console.log("favorites", favorites);
    setUser((prevState) => {
      console.log("prevState", prevState);
      return { ...prevState, favorites: favorites[0] };
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        FavoriteServices.getFavoritesRequest(currentuser.uid).then((result) => {
          console.log("yahyah", result);
          setUser({
            userInfo: currentuser,
            favorites: result.length ? result[0] : [],
          });
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{ signIn, signOut, signUp, user, readFavorites }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuthContext = () => {
  return useContext(AuthContext);
};
