import React, { useState } from "react";
import "./style.scss";

const MulitiLineTextarea = ({ firstLine, secondLine, thirdLine, id }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [visited, setVisited] = useState(false);
  const onChangeinp = (e) => {
    if (e.target.value) {
      setVisited(true);
    } else {
      setVisited(false);
    }
    setInputValue(e.target.value);
  };
  return (
    <div className="textarea-container">
      {!isFocused && !inputValue && (
        <div className="custom-placeholder">
          <span>{firstLine}</span>
          <span>{secondLine} </span>
          <span>{thirdLine}</span>
        </div>
      )}

      <textarea
        value={inputValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChangeinp}
        id={id}
        className={visited ? "visited" : ""}
      />
    </div>
  );
};

export default MulitiLineTextarea;
