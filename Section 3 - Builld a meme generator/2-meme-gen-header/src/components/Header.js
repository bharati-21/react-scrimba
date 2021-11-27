import React from 'react';

export default function Header() {
    return (
        <header>
            <img className="logo" src={require("../images/troll-face.webp").default} />
            <h3 className="logo-text">Meme Generator</h3>
            <h4 className="site-info">React Course - Project 3</h4>
        </header>
    )
}