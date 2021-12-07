import './App.css';
import {useState} from 'react';

function App() {
  const result = useState("Yes");

  return (
    <div>
      <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result[0]}</h1>
            </div>
        </div>
    </div>
  );
}

export default App;
