import React, { useState } from 'react';
import './style.scss';

const CustomSelect = ({
  options,
  selectedOption,
  placeholder,
  icon,
  chevronWidth = 14,
  chevronHeight = 8,
  path = '',
  arrow = true,
  allowToggle = true,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (allowToggle) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (option) => {
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div className="select-box" onClick={handleToggle}>
        <span className="selected-option">
          {selectedOption ? (
            <>
              {selectedOption.icon && (
                <>
                  <span className="icon">{selectedOption.icon}</span>
                </>
              )}
              {!path && selectedOption}
            </>
          ) : (
            <>
              {icon && (
                <>
                  <span className="icon">{icon}</span>
                </>
              )}
              {!path && placeholder}
            </>
          )}
        </span>
        {arrow && <ChevronDownIcon width={chevronWidth} height={chevronHeight} />}
      </div>
      {isOpen && (
        <ul className="options">
          {options?.length &&
            options.map((option) => (
              <li key={option.value} onClick={() => handleOptionClick(option)}>
                {option.icon && (
                  <>
                    <span className="icon">{option.icon}</span>
                  </>
                )}
                {!path && option.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

const ChevronDownIcon = () => (
  <span className="chevron-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L7 7L13 1" stroke="#1C597B" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default CustomSelect;
