import React, { useState } from 'react';
import './style.scss';

const CustomCheckbox = ({ label, value }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <label className="custom-checkbox">
        <input id={value} type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <span className={`checkmark ${isChecked ? 'checked' : ''}`}></span>
        <span className="checkbox-label">{label}</span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
