import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Index from "./index"

function CustomRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Index />} />
            </Routes>
        </BrowserRouter>
    )
}

export default CustomRoutes
