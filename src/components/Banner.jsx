import React from 'react';
import Navbar from './Navbar';
import hero1 from '../Hero image 1.png';
import hero2 from '../hero image 2.png';

function Banner() {
    return (
        <div style={{ backgroundColor: '#C9C0B1' }} className="h-screen px-5 py-4 overflow-hidden">
            <Navbar />
            <div className="flex justify-center items-center space-x-4">
                <p style={{ color: '#1F3923' }} className="font-medium text-2xl my-auto font-mono">
                    'As interesting<br /> as a plant'
                </p>
                <img alt="hero1" src={hero1} className="h-32 w-32 object-contain" />
                <img alt="hero2" src={hero2} className="h-32 w-32 object-contain" />
            </div>
        </div>
    );
}

export default Banner;
