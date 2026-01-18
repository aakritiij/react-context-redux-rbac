import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("user");

  const login = (name, userRole) => {
    console.log("SETTING ROLE TO:", userRole); // DEBUG
    setUserName(name);
    setRole(userRole);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserName("");
    setRole("user");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userName, role, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
