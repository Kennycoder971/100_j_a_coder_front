import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "config";
import Cookies from "universal-cookie";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => checkUserLoggedIn(), []);

  // Register user
  const register = async ({ username, email, password }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        username,
        email,
        password,
      });
      const cookies = new Cookies();

      // Set the cookie jwt
      cookies.set("jwt", response.data.token, { path: "/" });

      setUser(response.data.data);

      return response.data;
    } catch (error) {
      setUser(null);
      return error.response.data;
    }
  };

  // Login user
  const login = async ({ email, password }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
      const cookies = new Cookies();

      // Set the cookie jwt
      cookies.set("jwt", response.data.token, { path: "/" });

      setUser(response.data.data);

      return response.data;
    } catch (error) {
      setUser(null);
      return error.response.data;
    }
  };

  // Logout user
  const logout = async () => {
    const cookies = new Cookies();
    cookies.remove("jwt", {
      path: "/",
    });
    setUser(null);
  };

  // Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    const cookies = new Cookies();
    const jwt = cookies.get("jwt");

    if (jwt)
      try {
        const response = await axios.get(`${API_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        setUser(response.data.data);
      } catch (error) {
        setUser(null);
      }
  };

  const context = {
    user,
    register,
    login,
    logout,
    setUser,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
