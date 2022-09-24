import Navbar from "./components/navbar/Navbar"
import "./App.scss"
import "bootstrap/dist/js/bootstrap.bundle";
import LeftInfoBar from "./components/LeftInfoBar";
import RightInfoBar from "./components/RightInfoBar";
function App() {
  return (
    <div className="App" style={{backgroundColor: "#0A192F"}}>
          <Navbar/>
          <LeftInfoBar />
          <RightInfoBar />
    </div>
  );
}
export default App;
