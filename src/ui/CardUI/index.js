import React from 'react';
import './style.scss';

export const CardUI = ({ children, classN }) => {
  return <div className={`${classN} card-ui-wrapper`}>{children}</div>;
};
