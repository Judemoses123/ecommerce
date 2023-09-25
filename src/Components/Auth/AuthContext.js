import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  email: "",
  setEmail: () => {},
});

const AuthContextProvider = (props) => {
  // Initialize token and loginStatus based on localStorage
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken || "");
  const [loginStatus, setLoginStatus] = useState(!!storedToken);

  const loginHandler = async (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    setLoginStatus(true);

  };

  const logoutHandler = () => {
    localStorage.setItem("token", "");
    localStorage.setItem('email', "")
    setToken("");
    setLoginStatus(false);
  };

  const setEmailHandler = (id) => {
    console.log(id);
    setEmail(id);
  };

  const [email, setEmail] = useState("");

  const contextValues = {
    token: token,
    isLoggedIn: loginStatus,
    login: loginHandler,
    logout: logoutHandler,
    email: email,
    setEmail: setEmailHandler,
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken && storedToken !== "" && storedToken !== null && storedToken !== undefined) {
      setLoginStatus(true);
    }
    const storedEmail = localStorage.getItem('email');
    if (storedEmail && storedEmail !== "" && storedEmail !== null && storedEmail !== undefined ){
      setEmail(storedEmail);
    }
  }, [setLoginStatus,setEmail]);

  return (
    <AuthContext.Provider value={contextValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
