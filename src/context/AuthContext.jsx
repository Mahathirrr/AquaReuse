import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isNewUser, setIsNewUser] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsNewUser(false);
  };

  const register = (userData) => {
    setUser(userData);
    setIsNewUser(true);
  };

  const logout = () => {
    setUser(null);
    setIsNewUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, isNewUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
