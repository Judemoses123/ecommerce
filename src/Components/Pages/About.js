import MainNavbar from "../Navbar/Navbar";
import HeroImage from "../HeroImage/HeroImage";
import style from "./About.module.css";
import AboutMain from "../Main/AboutMain";
import Footer from "../Footer/Footer";
const About = () => {
  return (
    <div className={style.main}>
      <MainNavbar showCartButton={false} />
      <HeroImage />
      <AboutMain />
      <Footer/>
    </div>
  );
};
export default About;