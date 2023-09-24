import { useContext, useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import MainNavbar from "../Navbar/Navbar";
import style from "./Login.module.css";
import { AuthContext } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import HeroImage from "../HeroImage/HeroImage";
const Login = () => {
  const AuthCTX = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const formSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAu_0A0MVF-SdtOaUVE8Xr_6RKwqSdQ8Sc`,
        {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const data = await response.json();
        console.log(data);
        setErrorMessage(data.error.errors[0].message);
        throw new Error();
      }
      const data = await response.json();
      // console.log(data);
      await AuthCTX.login(data.idToken);
      AuthCTX.setEmail(emailRef.current.value);
      // navigate("/store");
      // setTimeout(()=>{
      //   navigate("/store");
      // }, 5000)
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log('isLoggedIn: ',AuthCTX.isLoggedIn);
  }, [AuthCTX.isLoggedIn, navigate]);
  return (
    <div>
      <MainNavbar />
      <HeroImage />
      <main className={style.main}>
        <span className={style.login}>Login</span>
        <form onSubmit={formSubmitHandler} className={style.form}>
          <label className={style.label}>Email</label>
          <input type="email" ref={emailRef} className={style.input}></input>
          <label className={style.label}>Password</label>
          <input
            type="password"
            ref={passwordRef}
            className={style.input}
          ></input>
          <span
            style={{ fontSize: "small", color: "salmon", fontWeight: "bold" }}
          >
            {errorMessage}
          </span>
          <button className={style.button}>Login</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};
export default Login;
