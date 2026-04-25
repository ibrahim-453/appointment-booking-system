import { createContext, useState } from "react";
import { loginApi } from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem("accessToken"),
  );
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    try {
      setLoading(true);
      const res = await loginApi(data);

      if (!res || !res.data || !res.data.data) {
        throw new Error("Invalid response from server");
      }

      const { tokens, userWithRole } = res.data.data;
      
      if (!tokens || !tokens.accessToken || !tokens.refreshToken) {
        throw new Error("Missing token data in response");
      }

      localStorage.setItem("accessToken", tokens.accessToken);
      localStorage.setItem("refreshToken", tokens.refreshToken);

      setUser(userWithRole);
      setIsAuthenticated(true);
      setLoading(false);
      return res;
    } catch (error) {
      setLoading(false);
      console.log("Something went wrong. Please Login again", error.message);
      throw error;
    }
  };
  const logout = () => {
    try {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
        console.log("Something went wrong. Please Logout again", error.message);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
