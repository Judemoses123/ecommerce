import { useContext } from 'react';
import style from './HeroImage.module.css';
import { AuthContext } from '../Auth/AuthContext';

const HeroImage = (props) => {
  const AuthCTX= useContext(AuthContext);
  // console.log(AuthCTX);
  return (
    <div className={style.main}>
      <div className={style.content}>
        <span className={style.label} style={{color: 'white'}}>The Generics</span>
        {props.children}
      </div>
    </div>
  );
};

export default HeroImage;
