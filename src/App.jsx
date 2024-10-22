// src/App.jsx
import React from "react";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav className="navbar">
        <h1>Theme Switcher</h1>
        <button
          className={darkMode ? "white-button" : "dark-button"}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </nav>
      <div className="content">
        <h2>{darkMode ? "Dark Mode is On" : "Light Mode is On"}</h2>
        <p>Click the button to toggle between Dark Mode and Light Mode.</p>
      </div>
    </div>
  );
};

export default App;
