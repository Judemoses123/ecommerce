import React, { useState } from "react"
export const AuthContext= React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})

const AuthContextProvider=(props)=>{
    const [token, setToken]= useState(null);
    const loginStatus= !!token;
    const loginHandler=(token)=>{
        setToken(token);
    }
    const logoutHandler=()=>{
        setToken(null);
    }
    const contextValues={
        token:token,
        isLoggedIn:loginStatus,
        login: loginHandler,
        logout: logoutHandler
    }
    return(
        <AuthContext.Provider value={contextValues}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;