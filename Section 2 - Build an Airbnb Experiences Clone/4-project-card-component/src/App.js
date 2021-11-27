import './App.css';

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card.js"

export default function App() {
            // <Hero />
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="card-wrapper">
                <Card />
            </section>
        </div>
    )
}