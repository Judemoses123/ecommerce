import { Button } from "react-bootstrap";
import style from "./Main.module.css";
import MainSection from "./MainSection";
const Main = (props) => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const merchArr = [
    {
      title: "T-Shirt",
      price: 19.99,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png", // Replace with the actual image link
    },
    {
      title: "Coffee Cup",
      price: 6.99,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png", // Replace with the actual image link
    },
  ];
  const clickHandler=()=>{
    props.toggleShow();
  }

  return (
    <div className={style.main}>
      <MainSection title={"MUSIC"} productsArr={productsArr} />
      <MainSection title={"MERCH"} productsArr={merchArr} />
      <Button onClick={clickHandler} variant="primary">{props.show?'HIDE THE CART':'SEE THE CART'}</Button>
    </div>
  );
};
export default Main;
