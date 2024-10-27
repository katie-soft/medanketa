import React, { useState } from 'react';
import './style.scss';
import { RadioOption } from './RadioOption';

const CustomRadio = ({ name, options }) => {
  const [selected, setSelected] = useState('');

  const handleChange = (val) => {
    setSelected(val);
  };

  return (
    <div className="group">
      {options.map((option) => (
        <RadioOption
          key={option.value}
          groupName={name}
          value={option.value}
          title={option.title}
          selected={selected}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default CustomRadio;
