import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
// Proveedor. El contexto me permite usar esos valores.
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
// Esta función contiene el valor del contexto.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // ### GOOGLE LOGIN ###
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  //Logout
  const logout = () => {
    signOut(auth);
  };

  // onAuthStateChanged => Me permite saber si esta logueado o no.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ loginWithGoogle, user, loading, logout }}>{children}</AuthContext.Provider>
  );
}
