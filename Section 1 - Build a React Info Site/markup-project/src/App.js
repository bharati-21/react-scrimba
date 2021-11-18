import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{width: '100px'}} alt="React Logo"/>
      </header>
      <main>
        <h1>Fun facts about React</h1>
        <ul class="fun-facts">
          <li>Was first released in 2013</li>  
          <li>Was originally created by Jordan Walke</li>  
          <li>Has well over 100k stars on GitHub</li>  
          <li>Is maintained by Facebook</li>  
          <li>Powers thousands of enterprise apps, including mobile apps</li>  
        </ul>
      </main>
    </div>
  );
}

export default App;
