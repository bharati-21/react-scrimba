import './App.css';
import {useState} from 'react';

function App() {
    /**
        * Challenge: Set up state to track our count (initial value is 0)
     */
    const [counter, setCounter] = useState(0);

    function incrementCount() {
        setCounter(previousCounter => {
            return previousCounter + 1;
        });
    }

    function decrementCount() {
        setCounter(previousCounter => {
            return previousCounter - 1;
        });
    }

    return (
        /*
        <div className="counter">
            <button className="counter--minus" onClick={(e) => {setCounter(counter-1)}}>–</button>
            <div className="counter--count">
                <h1>{counter}</h1>
            </div>
            <button className="counter--plus" onClick={(e) => {setCounter(counter+1)}}>+</button>
        </div>
        */        

        <div className="counter">
            <button className="counter--minus" onClick={decrementCount}>–</button>
            <div className="counter--count">
                <h1>{counter}</h1>
            </div>
            <button className="counter--plus" onClick={incrementCount}>+</button>
        </div>
    )
}

export default App;
