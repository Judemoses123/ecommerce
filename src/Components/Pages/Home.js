import Footer from "../Footer/Footer";
import HeroImage from "../HeroImage/HeroImage";
import HeroMain from "../Main/HeroMain";
import MainNavbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <MainNavbar />
      <HeroImage>
        <span style={{
            color:'white',
            fontSize:'1.5rem',
            backgroundColor:'darkgrey',
            padding:'0.8rem 2rem',
            borderRadius:'8px'
            // fontWeight:'bold'
        }}>Get our Latest Album</span>
        <div
          style={{
            backgroundImage:
              'url(https://www.nicepng.com/png/full/11-118375_citekeeper-is-a-crowdsourced-play-icon-white-png.png)',
            backgroundSize:'contain',
            width:'4rem',
            height:'4rem',
            margin:'1rem',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </HeroImage>
      <HeroMain/>
      <Footer/>
    </div>
  );
};
export default Home;
