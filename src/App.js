import {useState, useContext, createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import BlockA from './components/BlockA/BlockA';
import BlockB from './components/BlockB/BlockB';
import { ThemeContext, themes } from './context/ThemeContext/ThemeContext';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCheckTheme = (e) => {
    const { checked } = e.target;
    setIsDarkMode(checked)
  }

  const themeValue = isDarkMode ? themes.dark : themes.light;
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

      <ThemeContext.Provider value={themeValue}>
        <BlockA />
        <BlockB />
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
