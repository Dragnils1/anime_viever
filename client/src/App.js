import logo from './logo.svg';
import './App.css';
import {TheosPlayer} from "@aka_theos/react-hls-player";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <TheosPlayer
    src="https://mangavost.org/content/stream/boevoj_kontinent_2_neprevzojdyonnyj_klan_tan/001_25423/hls/index.m3u8"
    autoPlay={false}
  />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
