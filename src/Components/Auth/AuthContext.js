import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  email:"",
  setEmail:()=>{}
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  const loginHandler = async (token) => {
    setToken(token);
    setLoginStatus(true);
  };
  const logoutHandler = () => {
    setToken(null);
    setLoginStatus(false);
  };
  const setEmailHandler=(id)=>{
    console.log(id);
    setEmail(id);
  }
  const [email, setEmail]= useState('');
  const contextValues = {
    token: token,
    isLoggedIn: loginStatus,
    login: loginHandler,
    logout: logoutHandler,
    email:email,
    setEmail:setEmailHandler
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
