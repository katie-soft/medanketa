import React from 'react';
import './roundedWrapperUI.scss';

const RoundedWrapperUI = ({ bgColor, children, width, className = '' }) => {
  return (
    <div style={{ backgroundColor: bgColor, width: width }} className={`${className} rounded-wrapper`}>
      {children}
    </div>
  );
};
export default RoundedWrapperUI;
