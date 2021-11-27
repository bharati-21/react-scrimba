import airbnb_logo from '../Assets/airbnb_logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={airbnb_logo} className="nav--logo"/>
        </nav>
    )
}