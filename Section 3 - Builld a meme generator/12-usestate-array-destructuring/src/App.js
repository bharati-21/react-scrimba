import './App.css';
import {useState} from 'react';

function App() {
  const [isImportant, func] = useState("Yes"); // First value is the default value and the second return value is a function
    console.log(isImportant)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}

export default App;
