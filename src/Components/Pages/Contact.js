import { useRef } from "react";
import MainNavbar from "../Navbar/Navbar";
import style from "./Contact.module.css";
const Contact = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const formSubmitHandler = async () => {
    const obj = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      phone: phoneInputRef.current.value,
    };

    try {
      const response = await fetch(
        "https://ecommerce-9cf4b-default-rtdb.firebaseio.com/contact.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Somethiong went Wrong!");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <MainNavbar />
      <div className={style.main}>
        <span className={style.label}>Contact Us</span>
        <div className={style.form}>
          <label className={style.title}>Name:</label>
          <input ref={nameInputRef} className={style.input} type="text"></input>
          <label className={style.title}>Email:</label>
          <input
            ref={emailInputRef}
            className={style.input}
            type="email"
          ></input>
          <label className={style.title}>Phone:</label>
          <input
            ref={phoneInputRef}
            className={style.input}
            type="text"
          ></input>
          <button onClick={formSubmitHandler} className={style.button}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
export default Contact;
