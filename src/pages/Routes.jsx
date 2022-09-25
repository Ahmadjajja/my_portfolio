import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Work from "./Work";
import Contact from "./Contact";
import Index from "./index"

function CustomRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Index />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/work' element={<Work />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/contact' element={<contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default CustomRoutes
