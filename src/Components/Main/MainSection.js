import MainCard from "./MainCard";
import style from "./MainSection.module.css";
const MainSection = (props) => {
  return (
    <div>
      <span className={style.label}>{props.title}</span>
      <div className={style.grid}>
        {props.productsArr.map((item)=>{
            return(
                <MainCard title={item.title} price={item.price} imageUrl={item.imageUrl}/>
            )
        })}
      </div>
    </div>
  );
};
export default MainSection;
