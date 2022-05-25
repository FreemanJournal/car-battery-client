import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    const date = new Date();
    return (
        <footer className="text-white body-font bg-pink-600">
            <div className="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
                <Link to="/" className="flex title-font font-medium items-center md:justify-center justify-center text-white">
                   
                    <span className="ml-3 text-xl">Speed Battery Manufacturer</span>
                </Link>
                <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©{date.getFullYear()} SpeedBatteryManufacturer.com</p>
                
            </div>
        </footer>
    )
}
