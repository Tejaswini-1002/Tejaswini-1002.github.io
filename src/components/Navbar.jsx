import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
    <header className="flex justify-between">
        <section className="text-2xl font-medium">B.planet</section>
        <div className="flex">
            <button className="border-2 border-black rounded-2xl px-2 mr-2 hover:bg-black hover:text-white">
                <Link to="contact/">Contact us</Link>
            </button>
            <button className="border-2 border-black rounded-full px-2 hover:bg-black hover:text-white">
                <Link to="login/">Log in/sign up </Link>
            </button>
        </div>
    </header>
    )
}

export default Navbar