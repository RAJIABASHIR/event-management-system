"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { listenToAuthChanges, logout as fbLogout } from "../lib/firebaseAuth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = listenToAuthChanges((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const value = {
    user,
    loading,
    logout: fbLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
