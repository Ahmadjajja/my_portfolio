import "./App.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Pages from "./pages"
import CustomRoutes from "./pages/Routes"
function App() {
  return (
    <div className="App" style={{backgroundColor: "#0A192F"}}>
        <CustomRoutes/>
    </div>
  );
}
export default App;
