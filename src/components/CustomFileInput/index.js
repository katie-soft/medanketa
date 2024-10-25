import React, { useState } from 'react';
import './style.scss';
const CustomFileInput = ({ label, onChange, placeholder, icon: IconComponent }) => {
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      if (onChange) {
        onChange(file);
      }
    } else {
      setFileName('');
    }
  };

  return (
    <div className="input-group">
      {label && <label className="file-input-label">{label}</label>}
      <div className="input-wrapper">
        <input
          type="file"
          id="file-upload"
          className="file-input"
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="file-upload" className="custom-file-input">
          {IconComponent && (
            <span className="input-icon">
              <IconComponent />
            </span>
          )}
          {fileName || placeholder}
        </label>
      </div>
    </div>
  );
};

export default CustomFileInput;
