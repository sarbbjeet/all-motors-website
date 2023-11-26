import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";
//api here is an axios instance which has the baseURL set according to the env.
import api from "../../services/api";
import LoginForm from "./LoginForm";
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const url = `${process.env.NODE_ENV == 'production' ? 'https://allmotorsltd.co.uk' : ""}/api/user/login`
  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("authToken");
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = await api.get(url);
        if (user) setUser(user);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);
  const login = async (email, password) => {
    const { data: token } = await api.post(url, {
      email,
      password,
    });
    if (token) {
      console.log("Got token");
      Cookies.set("authToken", token?.data, { expires: 60 });
      api.defaults.headers.Authorization = `Bearer ${token?.data}`;
      const { data: user } = await api.get(url);
      setUser(user);
    }
  };

  const logout = (email, password) => {
    Cookies.remove("authToken");
    setUser(null);
    delete api.defaults.headers.Authorization;
    window.location.pathname = "/1005";
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
// contexts/auth.js
// append this new bit a the end:
export const ProtectRoute = ({ children }) => {
  //Cookies.remove("authToken");
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading || !isAuthenticated) return <LoginForm />;
  return children;
};
