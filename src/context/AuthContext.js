import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as googleSignOut,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import FavoriteServices from "../services/favorite.services";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
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
    setUser((prevState) => {
      return { ...prevState, favorites: favorites[0] };
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        FavoriteServices.getFavoritesRequest(currentuser.uid).then((result) => {
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
      value={{ signIn, signOut, signUp, user, readFavorites, googleSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuthContext = () => {
  return useContext(AuthContext);
};
