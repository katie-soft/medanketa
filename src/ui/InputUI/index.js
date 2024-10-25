import React, { useState } from 'react';
import './inputUI.scss';

const InputUI = ({ value, onChange, placeholder, type = 'text', classN = '', id }) => {
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
        className={`${classN} ${visited || value ? 'visited' : ''}`}
      />
      {/* {error && <span className="error-message">{error}</span>} */}
    </div>
  );
};

export default InputUI;
