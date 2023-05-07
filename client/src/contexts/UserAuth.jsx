import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

// Returns current user
export const CurrentUser = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        console.log(user);
      } else {
        setCurrentUser(null);
        console.log(user);
      }
    });
    return unsubscribe;
  }, []);

  return currentUser;
};

// Auth context
export const AuthContext = createContext(null);

// Returns auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Auth provider
export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);

  // Login user
  const login = async (user) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log("user was logged in");
      setError(null);
      return userCredential.user;
    } catch (error) {
      setError({ message: error.message });
      throw error;
    }
  };

  // Logout user
  const logout = async () => {
    try {
      await auth.signOut();
      console.log("user was logged out");
      setError(null);
    } catch (error) {
      setError({ message: error.message });
      throw error;
    }
  };

  // Sign up user
  const signup = async (user) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log("user was signed up");
      setError(null);
      return userCredential.user;
    } catch (error) {
      setError({ message: error.message });
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, signup, error }}>
      {children}
    </AuthContext.Provider>
  );
};
