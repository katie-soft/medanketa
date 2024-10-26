import React from 'react';
import './styles.scss';

const TextareaUI = ({ name, value, placeholder, classN = '', id, onChange }) => {
  return (
    <div className={`textarea-wrapper ${classN}`}>
      <textarea
        id={id}
        name={name}
        cols="30"
        rows="10"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextareaUI;
