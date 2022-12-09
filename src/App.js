import React, { useState, useEffect } from "react";
import "./App.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Pages from "./pages"
import CustomRoutes from "./pages/Routes";
import MainLoader from "./components/MainLoader";
function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {setIsLoading(false)}, 2000);
  
    // return () => {
    //   second
    // }
  }, [])
  
  return (
    <div className="App" style={{ backgroundColor: "#0A192F" }}>
      {!isLoading ?
        <CustomRoutes/>
        :<MainLoader />
      }

      
    </div>
  );
}
export default App;
