import React, { useState } from "react";
import "./style.scss";

function DynamicInput({ baseText, label }) {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    const currentValue = event.target.value;

    if (!currentValue.startsWith(baseText)) {
      setUserInput("");
    } else {
      const userInputPart = currentValue.slice(baseText.length);
      setUserInput(userInputPart);
    }
  };

  const handleFocus = (event) => {
    event.target.setSelectionRange(baseText.length, baseText.length);
  };

  const inputId = `${label?.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="input-container">
      {label && <label htmlFor={inputId}>{label}</label>}
      <div className="styled-text">
        <span className="base-text">{baseText}</span>
        <span className="user-text">{userInput}</span>
      </div>
      <input
        id={inputId}
        type="text"
        value={baseText + userInput}
        onChange={handleInputChange}
        onFocus={handleFocus}
        className="transparent-input"
      />
    </div>
  );
}

export default DynamicInput;
