import { Image } from "react-bootstrap";
import style from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.left}>The Generics</div>
      <div className={style.right}>
        <a
          className={style.youtube}
          href="https://www.youtube.com/"
        ></a>
        <a
          className={style.spotify}
          href="https://spotify.com/"
        ></a>
        <a
          className={style.facebook}
          href="https://facebook.com/"
        ></a>
      </div>
    </div>
  );
};
export default Footer;
