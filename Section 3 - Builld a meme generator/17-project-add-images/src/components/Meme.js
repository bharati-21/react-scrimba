import React from "react"
import memesData from "../memesData.js"
import {useState} from 'react';

export default function Meme() {
    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
     const [memeImage, setMemeImage] = useState("");

    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // memesArray[randomNumber].url  <-- this line is incomplete!
        setMemeImage(memesArray[randomNumber].url)
        
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            {memeImage ? <img src={memeImage} className="meme--image" alt=""/> : ""}
        </main>
    )
}