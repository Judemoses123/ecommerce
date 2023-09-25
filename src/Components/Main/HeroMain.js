import style from "./HeroMain.module.css";
const HeroMain = () => {
  const tours = [
    {
      date: "JUL16",
      city: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL19",
      city: "TORONTO, ON",
      venue: "BUDWEISER STAGE",
    },
    {
      date: "JUL 22",
      city: "BRISTOW, VA",
      venue: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      city: "PHOENIX, AZ",
      venue: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      city: "LAS VEGAS, NV",
      venue: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      city: "CONCORD, CA",
      venue: "CONCORD PAVILION",
    },
  ];

  return (
    <div className={style.main}>
      <span className={style.label}>Tours</span>
      <div className={style.grid}>
        {tours.map((tour) => {
          return (
            <div className={style.item}  key={tour.city}>
              <span className={style.date}>{tour.date}</span>
              <span className={style.city}>{tour.city}</span>
              <span className={style.venue}>{tour.venue}</span>
              <button className={style.button}>BUY TICKETS</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HeroMain;
