import React from 'react';
import './styles.scss';
import { ReactComponent as CloseIcon } from '../../assets/svg/closeRed.svg';
import { ReactComponent as EditIcon } from '../../assets/svg/pen.svg';

const IconButtonUI = ({ type, onClick, className }) => {
  return (
    <button className={`icon-button ${type} ${className}`} onClick={onClick}>
      {type === 'close' && <CloseIcon />}
      {type === 'edit' && <EditIcon />}
    </button>
  );
};

export default IconButtonUI;
