import logo from '../logo.svg';

export default function Header() {
    return (
        <header className="header container">
            <img className="logo" src={logo} alt="React logo"/>
            <h3 className="brand">
                ReactFacts
            </h3>
            <h4 class="website-info">React Course - Project 1</h4>
        </header>
    )
}