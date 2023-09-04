import style from './HeroImage.module.css';

const HeroImage = (props) => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <span className={style.label}>The Generics</span>
        {props.children}
      </div>
    </div>
  );
};

export default HeroImage;
