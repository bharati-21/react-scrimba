import React from "react"

export default function Meme() {
    return (
        <section className="meme">
            <form className="meme--form">
                <div className="meme--form--text-field">
                    <input className="text-field-1" />
                    <input className="text-field-2" />
                </div>
                <input type="submit" className="btn-generate" value="Get a new meme image 🖼"/>
            </form>
        </section>
    )
}