import { Spinner } from "react-bootstrap";
import MainNavbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Loader = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-between",
      }}
    >
      <MainNavbar />
      <div style={{display:'flex', flexDirection:'column'}}>
        <Spinner style={{ margin: "auto" }} />
        <b style={{ margin: "auto" }}>Loading...</b>
      </div>
      <Footer />
    </div>
  );
};
export default Loader;
