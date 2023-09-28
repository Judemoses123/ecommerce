import style from "./AboutMain.module.css";
const AboutMain = () => {
  return (
    <div className={style.main}>
      <span className={style.title}>About Us</span>
      <div className={style.para}>
        <div className={style.imageContainer}>
          <div className={style.image}></div>
        </div>
        <div className={style.text}>
          The Generics are not your typical band.
          Rooted in the heart of our vibrant city, they've emerged as a musical
          force that defies categorization. Their journey started in a modest
          garage, where diverse musical backgrounds converged to create a sound
          that's uniquely their own. Their songs delve into universal themes of
          love, resilience, and self-discovery, resonating with audiences
          worldwide. What sets The Generics apart is their unwavering
          authenticity. Their lyrics transcend words, painting vivid emotional
          landscapes that connect with listeners on a profound level. Their live
          performances are nothing short of electric, leaving audiences
          captivated and craving more. With a growing global fanbase, known as
          the "Generics Enthusiasts," The Generics have cultivated a vibrant
          musical community. Their concerts are unforgettable experiences,
          pulsating with energy and emotion. Step into The Generics' world and
          let their music transport you on a journey that defies boundaries and
          celebrates the enduring power of music.
        </div>
      </div>
    </div>
  );
};
export default AboutMain;
