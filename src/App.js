import Navbar from "./components/navbar/Navbar"
import "./App.scss"
import "bootstrap/dist/js/bootstrap.bundle";
import LeftInfoBar from "./components/LeftInfoBar";
import RightInfoBar from "./components/RightInfoBar";
import Home from "./pages/Home"
import About from "./pages/About"
function App() {
  return (
    <div className="App" style={{backgroundColor: "#0A192F"}}>
          <Navbar/>
          <LeftInfoBar />
          <RightInfoBar />
          <Home />
          <About/>
    </div>
  );
}
export default App;
