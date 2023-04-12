import logo from './logo.svg';
import './App.css';
import './components/formu.js'
import Formu from './components/formu.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Niyo Designs
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
          <Formu />
      </header>
    </div>
  );
}

export default App;
