import './App.css';
import MainNavbar from './Components/Navbar/Navbar';
import HeroImage from './Components/HeroImage/HeroImage';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <MainNavbar/>
      <HeroImage/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
