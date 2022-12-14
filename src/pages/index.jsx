import React from 'react'
import Navbar from "../components/navbar/Navbar";
import LeftInfoBar from "../components/LeftInfoBar";
import RightInfoBar from "../components/RightInfoBar";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import Certification from "./Certification"
function index() {
    return (
        <div>
            <Navbar />
            <LeftInfoBar />
            <RightInfoBar />
            <Home />
            <About />
            <Certification/>
            <Experience />
            <Work />
            <Contact />
            <Footer />
        </div>
    )
}

export default index
