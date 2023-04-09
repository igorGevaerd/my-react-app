import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This page is being used for testing purposes!
        </p>
        <a
          className="App-link"
          href="https://igorgevaerd.github.io/my-react-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Igor Gevaerd
        </a>
      </header>
    </div>
  );
}

export default App;
