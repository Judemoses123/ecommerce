import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import HeroImage from "../HeroImage/HeroImage";
import HeroMain from "../Main/HeroMain";
import MainNavbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <MainNavbar showLogin={true}/>
      <HeroImage>
        <button style={{
            color:'white',
            fontSize:'1.5rem',
            backgroundColor:'#0000009e',
            backdropFilter: 'blur(3px)',
            padding:'0.8rem 2rem',
            borderRadius:'8px',
            border:'none'
            // fontWeight:'bold'
        }}><Link to={`/store`} style={{textDecoration:'none !important', color:"white"}}>Get our Latest Album</Link></button>
        {/* <div
          style={{
            backgroundImage:
              'url(https://www.nicepng.com/png/full/11-118375_citekeeper-is-a-crowdsourced-play-icon-white-png.png)',
            backgroundSize:'contain',
            width:'4rem',
            height:'4rem',
            margin:'1rem',
            backgroundRepeat: 'no-repeat'
          }}
        ></div> */}
      </HeroImage>
      <HeroMain/>
      <Footer/>
    </div>
  );
};
export default Home;
