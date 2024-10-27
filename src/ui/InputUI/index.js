import React, { useState } from 'react';
import './inputUI.scss';

const InputUI = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  classN = '',
  isWide = true,
  id,
  hasCopyButton = false,
  min,
  max,
  step,
}) => {
  const [visited, setVisited] = useState(false);

  const onChangeinp = (e) => {
    if (e.target.value) {
      setVisited(true);
    } else {
      setVisited(false);
    }

    if (onChange) {
      onChange(e);
    }
  };

  // const inputId = `${label?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="input-group">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChangeinp}
        placeholder={placeholder}
        className={`${classN} ${visited || value ? 'visited' : ''} ${!isWide && 'auto-width'}`}
        min={min}
        max={max}
        step={step}
      />
      {hasCopyButton && (
        <button className="input-copy-button" onClick={() => navigator.clipboard.writeText(value)}>
          Скопировать
        </button>
      )}
      {/* {error && <span className="error-message">{error}</span>} */}
    </div>
  );
};

export default InputUI;
