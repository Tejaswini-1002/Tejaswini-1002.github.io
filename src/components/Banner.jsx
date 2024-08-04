import React from 'react'
import Navbar from './Navbar'
import src1 from "../hero image 2.png"
import src2 from "../Hero image 1.png"

// const src1 = "../Images/hero image 2.png";
// const src2 = "../Images/Hero image 1.png";

function Banner(){
    return(
    <div style={{"backgroundColor":"#C9C0B1"}} className="h-screen px-5 py-4 overflow-hidden">
        <Navbar />
        <div className="flex justify-center ">
            <p style={{"color":"#1F3923"}} className="font-medium text-2xl my-auto font-mono">'As interesting<br /> as a plant'</p>
            <img alt="hero1" src={src1} className="" />
            <img alt="hero2" src={src2} className="" />
        </div>
    </div>
    )
}

export default Banner