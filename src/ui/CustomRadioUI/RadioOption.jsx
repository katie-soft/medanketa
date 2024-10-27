import React from 'react';

export const RadioOption = ({ value, title, selected, groupName, onChange }) => {
  const handleChange = () => onChange(value);

  const inputId = `${groupName}_${value}`;
  const isChecked = value === selected;

  return (
    <div className="radio-container" key={value} data-checked={isChecked}>
      <input className="radio-input" type="radio" name={groupName} id={inputId} value={value} onChange={handleChange} />
      <label className="radio-label" htmlFor={inputId}>
        <span className={`radio-checkmark ${isChecked ? 'checked' : ''}`}></span>
        {title}
      </label>
    </div>
  );
};
