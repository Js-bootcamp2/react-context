import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BlockA from './components/BlockA/BlockA';
import BlockB from './components/BlockB/BlockB';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCheckTheme = (e) => {
    const { checked } = e.target;
    setIsDarkMode(checked)
  }

  return (
    <div className="App">
      <label htmlFor="theme">Dark Mode
        <input 
          checked={isDarkMode} 
          onChange={handleCheckTheme} 
          id="theme" 
          type="checkbox" 
        />
      </label>

      <BlockA mode={isDarkMode}/>
      <BlockB mode={isDarkMode}/>

    </div>
  );
}

export default App;
