import {useState} from 'react';
import memesData from "../memesData.js"

export default function Meme() {
    /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */
    
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    
    function handleChange(event) {
        const {name, value} = event.target;
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            };
        });
    }
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    value={meme.topText}
                    name="topText"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    value={meme.bottomText}
                    name="bottomText"
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                {meme.topText && <h2 className="meme--text top">{meme.topText}</h2>}
                {meme.bottomText && <h2 className="meme--text bottom">{meme.bottomText}</h2>}
            </div>
        </main>
    )
}