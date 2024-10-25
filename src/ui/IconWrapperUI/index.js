import React from 'react';
import './IconWrapperUI.scss';

export const IconWrapperUI = ({ children, border = false, borderColor = '#000', bgColor, classN = '', onClick }) => {
  return (
    <div
      className={`icon-wrapper ${border ? 'border' : ''} ${classN}`}
      style={{
        borderColor: border ? borderColor : 'transparent',
        background: bgColor,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
