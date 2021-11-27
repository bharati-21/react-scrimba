import photo_grid from '../Assets/photo-grid.webp'

export default function Hero() {
    return (
        <section className="hero">
            <img src={photo_grid}/>
            <h1 className="hero-heading">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}