import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import LeftInfoBar from "./components/LeftInfoBar";
import RightInfoBar from "./components/RightInfoBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
function App() {
  return (
    <div className="App" style={{backgroundColor: "#0A192F"}}>
          <Navbar/>
          <LeftInfoBar />
          <RightInfoBar />
          <Home />
          <About/>
          <Experience/>
          <Work/>
          <Contact/>
          <Footer/>
    </div>
  );
}
export default App;
