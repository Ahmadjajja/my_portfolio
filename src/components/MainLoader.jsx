import React from 'react'
import { ThreeCircles } from "react-loader-spinner"

export default function MainLoader() {
    return (
        <div className='MainLoader d-flex justify-content-center align-items-center vh-100 w-100 position-absolute' style={{ zIndex: 10000 }}>
            <ThreeCircles
                height="165"
                width="165"
                color="#CCD6F6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
            <h5 className="text-success innerHeading">AJ</h5>
        </div>
    )
}