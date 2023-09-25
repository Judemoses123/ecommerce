import { useContext } from "react"
import { AuthContext } from "./Auth/AuthContext"
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes=()=>{
    const AuthCTX= useContext(AuthContext);
    return(
        AuthCTX.isLoggedIn? <Outlet/>: <Navigate to='/login'/>
    )
}
export default PrivateRoutes;