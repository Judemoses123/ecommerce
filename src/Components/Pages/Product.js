import style from "./Product.module.css";
import { useParams } from "react-router-dom";
import MainNavbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import StoreContext from "./StoreContext";
import StoreContextProvider from "./StoreContextProvider";
import { Button } from "react-bootstrap";
import CartContext from "../Cart/CartContext";
import CartOffCanvas from "../Cart/CartOffCanvas";
import { useState } from "react";
import Store from "./Store";
import StarIcon from '@mui/icons-material/Star';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Product = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top immediately when the URL changes (page navigation)
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const params = useParams();
  const StoreCTX = useContext(StoreContext);
  const productsArr = StoreCTX.products;
  let selected=[];
  const merchArr = StoreCTX.merch;
  if(params.type=='music'){
    selected = productsArr.find((item) => {
      return item.id == params.productID;
    });
  }
  else if(params.type=='merch'){
    selected = merchArr.find((item) => {
      return item.id == params.productID;
    });
  }
  
  const ctx = useContext(CartContext);
  const clickHandler = () => {
    const item = {
      title: selected.title,
      price: selected.price,
      imageUrl: selected.imageUrl,
      quantity: 1,
    };
    console.log(item);
    ctx.addItems(item);
  };
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((prev) => {
      return !prev;
    });
  };
  return (
    <>
      {show && <CartOffCanvas toggleShow={toggleShow} key={selected.title}/>}
      <MainNavbar  />
      <div className={style.container}>
        <div className={style.left}>
          <div
            className={style.image}
            style={{ backgroundImage: `url(${selected.imageUrl})` }}
          />
        </div>
        <div className={style.right}>
          <div className={style.data}>
            <span className={style.title}>{selected.title}</span>
            <span className={style.price}>${selected.price}</span>
            <p>{selected.description}</p>
          </div>
          <Button onClick={clickHandler} variant="primary">
            ADD TO CART
          </Button>
        </div>
      </div>
      <div className={style.reviews}>
        <span
          style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "1rem" }}
        >
          Ratings & Reviews
        </span>
        {selected.reviews.map((item) => {
        const letterImage= item.username.toString().charAt(0);
        const r= 256*Math.random();
        const g= 256*Math.random();
        const b= 256*Math.random();
        const ratingToDecimal= Number(item.rating).toFixed(1);
          return (
            <div className={style.review} key={item.review}>
              <div className={style.reviewHeader}>
                <div className={style.reviewImage} style={{backgroundColor:`rgb(${r},${g},${b})`,  textShadow:'2px 2px 2px black;'}}>{letterImage}</div>
                <div className={style.reviewRight}>
                  <div className={style.username}>{item.username}</div>
                  <div className={style.rating}>{ratingToDecimal}<StarIcon style={{color:'gold'}}/></div>
                </div>
              </div>
              <p className={style.reviewText}>
                {item.review}
              </p>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
export default Product;
