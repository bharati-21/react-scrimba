import airbnb_logo from '../Assets/airbnb_logo.png';
import React from "react";
import "../App.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="logo" src={airbnb_logo}/>
        </nav>
    )
}