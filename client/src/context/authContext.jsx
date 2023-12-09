import { createContext, useContext, useEffect, useState } from "react";
import { logoutRequest, verifyTokenRequest } from "../api/auth";



const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}



function AuthProvider ({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const request = async () => {
      try {
        const res = await verifyTokenRequest();
        setUser(res.data);
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        setUser(null);
        setIsAuthenticated(false);
        setLoading(false);
      }
    }
    request();
  },[]);
  
  const logout = () => {
    logoutRequest();
    setIsAuthenticated(false);
    setUser(null);
  }
 
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
