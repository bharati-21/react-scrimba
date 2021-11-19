import ReactDOM from 'react-dom';
import './App.css';

// Importing components
import About from './Components/About';
import Info from './Components/Info';
import Interests from './Components/Interests';
import Footer from './Components/Footer';

function InfoCard() {
    return (
        <div className="info-card">
            <Info />
            <main className="main">
                <About />
                <Interests />
            </main>
            <Footer />
        </div>
    )
}

ReactDOM.render(<InfoCard />, document.getElementById('root'));