import React from 'react';
import "./buttonUI.scss";

const ButtonUI = ({ text, onClick, icon: IconComponent, type = 'primary', disabled = false,classN='' }) => {
  return (
    <button
      className={`button ${type} ${classN}`}
      onClick={onClick}
      disabled={disabled}
    >
      {IconComponent && <IconComponent className="button-icon" />}  
      {text}
    </button>
  );
};

export default ButtonUI;
