import { Button } from "react-bootstrap";
import style from "./Main.module.css";
import MainSection from "./MainSection";
import { useContext } from "react";
import StoreContext from "../Pages/StoreContext";
const Main = (props) => {
  // const productsArr = []
  const StoreCTX= useContext(StoreContext);
  const productsArr= StoreCTX.products;
  console.log('products> ', productsArr);
  const merchArr = [
    {
      id: 1,
      title: "T-Shirt",
      price: 19.99,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png", // Replace with the actual image link
    },
    {
      id: 2,
      title: "Coffee Cup",
      price: 6.99,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png", // Replace with the actual image link
    },
  ];
  const clickHandler = () => {
    props.toggleShow();
  };

  return (
    <div className={style.main}>
      <MainSection title={"MUSIC"} productsArr={productsArr} />
      <MainSection title={"MERCH"} productsArr={merchArr} />
      <Button onClick={clickHandler} variant="primary">
        {props.show ? "HIDE THE CART" : "SEE THE CART"}
      </Button>
    </div>
  );
};
export default Main;
