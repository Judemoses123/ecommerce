import { Button } from "react-bootstrap";
import style from "./Main.module.css";
import MainSection from "./MainSection";
import { useContext } from "react";
import StoreContext from "../Pages/StoreContext";
const Main = (props) => {
  // const productsArr = []
  const StoreCTX= useContext(StoreContext);
  const productsArr= StoreCTX.products;
  const merchArr = StoreCTX.merch;
  const clickHandler = () => {
    props.toggleShow();
  };

  return (
    <div className={style.main}>
      <MainSection title={"MUSIC"} type={'music'} productsArr={productsArr} />
      <MainSection title={"MERCH"} type={'merch'} productsArr={merchArr} />
      <Button onClick={clickHandler} variant="primary">
        {props.show ? "HIDE THE CART" : "SEE THE CART"}
      </Button>
    </div>
  );
};
export default Main;
