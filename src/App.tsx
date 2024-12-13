import React, { useState } from "react";
import "./app.css"; // Import the CSS file

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [color, setColor] = useState<string>("black");

  const incrementCounter = () => setCounter(counter + 1);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const changeColor = () => setColor(color === "black" ? "blue" : "black");

  return (
    <div className="container">
      <h1 className="header">Interactive App in TypeScript</h1>

      <div className="counter-section">
        <h2>Counter: {counter}</h2>
        <button onClick={incrementCounter}>Increment Counter</button>
      </div>

      <div className="input-section">
        <h3>Input Text:</h3>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Type something here"
        />
        <p className="text-output">You typed: {text}</p>
      </div>

      <div className="toggle-section">
        <h3>Toggle Visibility of Text Below:</h3>
        <button onClick={toggleVisibility}>
          {isVisible ? "Hide" : "Show"} Text
        </button>
        {isVisible && <p className="toggle-text">This is a toggled text!</p>}
      </div>

      <div className="color-section">
        <h3>Change Text Color:</h3>
        <button onClick={changeColor}>Toggle Color</button>
        <p className="color-text" style={{ color: color }}>
          This text color changes between black and blue!
        </p>
      </div>
    </div>
  );
};

export default App;
